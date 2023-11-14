import { loginUser } from "../../controllers/user";

export default async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await loginUser({ email, password });
    res.json({ user, token });
  } catch (error) {
    res.status(403).json(error);
  }
};
