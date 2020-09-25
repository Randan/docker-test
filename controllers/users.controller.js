const User = require('../models/user.model');

module.exports = {
  get: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch(err) {
      res.status(500).json({ message: err.message });
    }
  },

  getById: (req, res) => res.json(res.user),

  post: async (req, res) => {
    const user = new User({ ...req.body });

    try {
      const newUser = await user.save();
      res.status(201).json(newUser);
    } catch(err) {
      res.status(400).json({ message: err.message });
    }
  },

  patch: async (req, res) => {
    const { firstName, lastName, age } = req.body;

    if (firstName !== null) res.user.firstName = firstName;
    if (lastName !== null) res.user.lastName = lastName;
    if (age !== null) res.user.age = age;

    try {
      const updatedUser = await res.user.save();
      res.json(updatedUser);
    } catch(err) {
      res.status(400).json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      await res.user.remove();
      res.json({ message: 'This User has been Deleted' });
    } catch(err) {
      res.status(500).json({ message: err.message });
    }
  }
};