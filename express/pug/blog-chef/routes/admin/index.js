import { Router } from "express";
import protectRoute from "../../utils/protectRoute";
import home from "./home";
import login from "./login";
import dashboard from "./dashboard";
import logOut from "./logout";
import moderatePost from "./moderate-post";
import signUpAdmin from "./signup-admin";
import {
  loginAdminValidation,
  signUpAdminVAlidation,
} from "../../utils/validation";

const router = Router();

router.get("/", home);
router
  .route("/login")
  .get((req, res) => res.render("login"))
  .post(loginAdminValidation, login);

router
  .route("/signup")
  .get((req, res) => res.render("signup"))
  .post(signUpAdminVAlidation, signUpAdmin);

router.get("/dashboard", protectRoute("/admin/login"), dashboard);
router.get("/logout", logOut);
router.post("/moderate", protectRoute("/admin/login"), moderatePost);

export default router;
