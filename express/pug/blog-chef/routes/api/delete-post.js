import { deletePost } from "../../controllers/post";

export default async (req, res) => {
  try {
    const postId = req.params.postId;
    await deletePost(postId);
    res.json({ status: true });
  } catch (error) {
    res.status(401).json({ error });
  }
};
