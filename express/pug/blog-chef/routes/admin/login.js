import { loginAdmin } from "../../controllers/user";

export default async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await loginAdmin({ email, password });
    req.session.user = {
      id: user._id,
      name: user.name,
      email: user.email,
      lastLoggedIn: user.lastLoggedIn,
    };
    return res.redirect("/admin/dashboard");
  } catch {
    res.redirect("/admin/login");
  }
};
