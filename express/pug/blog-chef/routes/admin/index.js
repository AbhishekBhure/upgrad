import { Router } from "express";
import protectRoute from "../../utils/protectRoute";
import home from "./home";
import login from "./login";
import dashboard from "./dashboard";
import logOut from "./logout";
import moderatePost from "./moderate-post";
import signUpAdmin from "./signup-admin";

const router = Router();

router.get("/", home);
router
  .route("/login")
  .get((req, res) => res.render("login"))
  .post(login);

router
  .route("/signup")
  .get((req, res) => res.render("signup"))
  .post(signUpAdmin);

router.get("/dashboard", protectRoute("/admin/login"), dashboard);
router.get("/logout", logOut);
router.post("/moderate", protectRoute("/admin/login"), moderatePost);

export default router;
