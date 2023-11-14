import { signUpAdmin } from "../../controllers/user";

export default async (req, res) => {
  try {
    const { name, email, password } = req.body;
    await signUpAdmin({ name, email, password });
    res.redirect("/admin/login");
  } catch (error) {
    res.redirect("/admin/signup");
  }
};
