import { Router } from "express";
import getPosts from "./get-posts";
import storePost from "./store-post";
import loginUser from "./login-user";
import signUpUser from "./signup-user";
import getPost from "./get-post";
import deletePost from "./delete-post";
import catchAll from "./catch-all";
import verify from "./verify";
import protectApi from "../../utils/protectApi";
import {
  servePostsFromCache,
  serverPostFromcache,
} from "../../controllers/cache";

const router = Router();

router.get("/posts", servePostsFromCache(), getPosts);
router
  .route("/post/:postId?")
  .get(serverPostFromcache(), getPost)
  .post(protectApi, storePost)
  .delete(protectApi, deletePost);
router.post("/login", loginUser);
router.post("/signup", signUpUser);
router.post("/verify", verify);
router.use(catchAll);

export default router;
