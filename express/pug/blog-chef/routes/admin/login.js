export default (req, res) => {
  const { email, password } = req.body;
  if (email === "test@gmail.com" && password === "123456789") {
    req.session.user = "Abhi";
    console.log(req.session.user);
    return res.redirect("/admin/dashboard");
  }

  res.redirect("/admin/login");
};
