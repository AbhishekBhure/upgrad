import { verifyToken } from "../../controllers/user";

export default async (req, res) => {
  try {
    let { token } = req.body;
    await verifyToken(token);
    res.json({ status: true });
  } catch (error) {
    res.status(403).json(error);
  }
};
