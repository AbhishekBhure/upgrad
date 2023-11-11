export default (req, res) => {
  const postId = req.params.postId;
  res.json({
    post: postId,
  });
};
