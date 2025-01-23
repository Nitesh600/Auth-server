const User = require("../Models/model");
require("dotenv").config();
const jwt = require("jsonwebtoken");


const userVerification = (req, res, next) => {
    try {
      const token = req.cookies.token || req.headers.authorization;
      if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      // Verify the token logic (Example)
      const decoded = jwt.verify(token, process.env.TOKEN_KEY);
      req.user = decoded;
      next(); // Move to next middleware/controller
    } catch (error) {
      return res.status(401).json({ message: "Invalid Token" });
    }
  };
  
  module.exports = userVerification;
