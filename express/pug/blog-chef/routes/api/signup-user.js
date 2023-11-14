import { signUpUser } from "../../controllers/user";

export default async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const { user, token } = await signUpUser({ name, email, password });
    res.json({ user, token });
  } catch (error) {
    res.status(403).json(error);
  }
};
