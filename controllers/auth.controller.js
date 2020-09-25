const { generateAccessToken } = require('../middlewares/jwt.middleware');

module.exports = {
  signin: async (req, res) => {
    const { firstName, lastName, rememberMe } = req.body;
    const access_token = generateAccessToken({ data: `${firstName}${lastName}` }, rememberMe);

    res.status(201).json({ access_token });
  },

  signup: async (req, res) => {
    const { firstName, lastName } = req.body;
    const access_token = generateAccessToken({ data: `${firstName}${lastName}` });

    res.status(201).json({ access_token });
  },
};