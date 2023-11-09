export default (req, res) => {
  res.render("dashboard", {
    user: req.session.user,
    posts: [
      {
        id: 1,
        author: "Joe M",
        title: "In Love with nature",
        content: "Love is in the air",
      },
      {
        id: 2,
        author: "Joe brother",
        title: "In Love with Universe",
        content: "Love is in the universe",
      },
    ],
  });
};
