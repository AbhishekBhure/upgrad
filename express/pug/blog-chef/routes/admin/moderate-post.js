import { approvePost, deletePost } from "../../controllers/post";

export default async (req, res) => {
  const { task, postId } = req.body;
  try {
    task === "approve" ? await approvePost(postId) : await deletePost(postId);
  } finally {
    res.redirect("/admin/dashboard");
  }
};
