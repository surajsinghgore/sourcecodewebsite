const jwt = require("jsonwebtoken");
const userData = require("../database/models/userSchema");

const Authentication = async (req, res, next) => {
  try {
    const token = req.cookies.userToken;

    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    
    const rootUser = await userData.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("user not found");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userId = rootUser._id;
    next();
  } catch (error) {
    res.status(401).send("Unauthorized user");
    console.log(error + " unauthozied");
  }
};

module.exports = Authentication;
