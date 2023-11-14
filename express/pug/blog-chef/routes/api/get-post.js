import { getPost } from "../../controllers/post";

export default async (req, res) => {
  try {
    const id = req.params.postId;
    const post = await getPost(id);
    res.json({ post });
  } catch (error) {
    res.status(403).json(error);
  }
};
