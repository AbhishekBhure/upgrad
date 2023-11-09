export default (req, res) => {
  const { email, password } = req.body;
  res.json({ status: true });
};
