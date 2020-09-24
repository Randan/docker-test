const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_SECRET } = require('../utils/getEnvVar');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token === null) return res.sendStatus(401);

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      console.log(err);
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  })
};

const generateAccessToken = (data, isRemember) =>
  jwt.sign(data, ACCESS_TOKEN_SECRET, { expiresIn: isRemember ? '172800s' : '1800s' });

module.exports = { authenticateToken, generateAccessToken };