import express from "express";
import { join } from "path";
import morgan from "morgan";
import session from "express-session";
import { createWriteStream } from "fs";
import compression from "compression";
import { protectRoute } from "./utils/protectedRoute";
const app = express();
const logFile = join(__dirname, "blogchef.log");

app.use(morgan(":method - :url - :date - :response-time ms"));
app.use(
  morgan(":method - :url - :date - :response-time ms", {
    stream: createWriteStream(logFile, { flags: "a" }),
  })
);

app.use(compression());
app.use("/assets", express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  "/admin",
  session({
    name: "sessId",
    resave: false,
    saveUninitialized: true,
    secret:
      app.get("env") === "production"
        ? process.env.sessionSecret
        : "2qw334er5667t890p6",
    cookie: {
      httpOnly: true,
      maxAge: 18000000,
      secure: app.get("env") === "production" ? true : false,
    },
  })
);
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.send("<h1>BlogChef</h1>");
});

app.get("/admin", (req, res) =>
  req.session.user
    ? res.redirect("/admin/dashboard")
    : res.redirect("/admin/login")
);

app
  .get("/admin/login", (req, res) => res.render("login"))
  .post("/admin/login", (req, res) => {
    const { email, password } = req.body;
    if (email === "test@gmail.com" && password === "123456789") {
      req.session.user = "Abhi";
      return res.redirect("/admin/dashboard");
    }
    res.redirect("/admin/login");
  });

app.get("/admin/dashboard", protectRoute("/admin/login"), (req, res) =>
  res.render("dashboard", {
    username: req.session.user,
    posts: [
      {
        id: 1,
        author: "Joe",
        title: "Don Bolte",
        content: "Kuch nai don ban ke raho",
      },
      {
        id: 2,
        author: "Joe Brother",
        title: "Don Bolte Joe Bhai ko",
        content: "Kuch nai don ban ke raho Joe Bhai",
      },
    ],
  })
);
app.get("/admin/logout", (req, res) => {
  delete req.session.user;
  res.redirect("/admin/login");
});

app.post("/api/posts", (res, req) => {
  console.log(req.body);
  res.json({ message: "Got it!" });
});

app.listen(3000, () => console.log("Blog Chef is cooking on port 3000"));
