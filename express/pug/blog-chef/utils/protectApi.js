import { verifyToken } from "../controllers/user";

const protectApi = async (req, res, next) => {
  try {
    let authorization = req.header("Authorization");
    if (authorization) {
      let token = authorization.split(" ")[1];

      await verifyToken(token);
      return next();
    }

    res.status(403).json({ message: "Unauthorized access" });
  } catch {
    res.status(403).json({ message: "Unauthorized access" });
  }
};

export default protectApi;
