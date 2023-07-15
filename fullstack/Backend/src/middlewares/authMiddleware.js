const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized - Token not provided" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    // console.log("Decoded JWT:", decoded); // For debugging purposes
    req.user = decoded; // Set the decoded user data to req.user
    next();
  } catch (error) {
    // console.error("JWT Verification Error:", error); // For debugging purposes
    return res.status(401).json({ message: "Unauthorized - Invalid token" });
  }
};

module.exports = authMiddleware;
