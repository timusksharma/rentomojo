const jwt = require("jsonwebtoken");

module.exports = {
  checktoken: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      token = token.slice(7);
        jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
          return res.status(200).json({
            success: false
          })
        } else {
          next()
        }
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "Token is Required"
      })
    }
  }
}