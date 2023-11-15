import { cacheContent } from "../../controllers/cache";
import { getPost } from "../../controllers/post";

export default async (req, res) => {
  try {
    const id = req.params.postId;
    const post = await getPost(id);
    cacheContent(`post:${id}`, post);
    res.json({ post });
  } catch (error) {
    res.status(403).json(error);
  }
};
