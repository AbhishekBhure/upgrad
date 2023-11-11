const protectApi = (req, res, next) => {
  const authorization = req.header("Authorization");
  if (authorization) {
    //verify jwt token here

    return next();
  }
  return res.status(403).json({ message: "Unauthorized Access" });
};

export default protectApi;
