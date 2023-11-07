import express from "express";
import { join } from "path";
const app = express();

app.use("/assets", express.static(join(__dirname, "public")));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.send("<h1>BlogChef</h1>");
});

app
  .get("/admin/login", (req, res) => res.render("login"))
  .post("/admin/login", (req, res) => res.send("<h1>Login API</h1>"));

app.get("/admin/dashboard", (req, res) => res.render("dashboard"));
app.get("/admin/logout", (req, res) => res.redirect("/admin/login"));

app.listen(3000, () => console.log("Blog Chef is cooking on port 3000"));
