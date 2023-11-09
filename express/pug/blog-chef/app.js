import express from "express";
import { join } from "path";
import morgan from "morgan";
import session from "express-session";
import { createWriteStream } from "fs";
import compression from "compression";
import home from "./routes/home";
import admin from "./routes/admin";
import api from "./routes/api";

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
app.use("/", home);
app.use("/admin", admin);
app.use("/api", api);

app.listen(3000, () => console.log("Blog Chef is cooking on port 3000"));
