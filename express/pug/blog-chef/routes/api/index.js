import { Router } from "express";
import getPosts from "./get-posts";
import loginUser from "./login-user";
import signupUser from "./signup-user";

const router = Router();

router.get("/posts", getPosts);
router.post("/login", loginUser);
router.post("/signup", signupUser);

export default router;
