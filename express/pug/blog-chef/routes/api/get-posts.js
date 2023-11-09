export default (req, res) => {
  const posts = [
    { id: 1, title: "First love" },
    { id: 2, title: "Second Love" },
  ];
  res.json({
    posts,
  });
};
