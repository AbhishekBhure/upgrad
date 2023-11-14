import { getAllPosts } from "../../controllers/post";

export default async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.json({ posts });
  } catch (error) {
    res.status(403).json(error);
  }
};
