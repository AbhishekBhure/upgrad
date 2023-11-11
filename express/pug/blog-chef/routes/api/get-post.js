export default (req, res) => {
  const postId = req.param.postId;
  res.json({
    post: postId,
  });
};
