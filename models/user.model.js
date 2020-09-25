const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, 'Username is required'],
      match: [/^[a-zA-Z0-9]+$/, 'Username is invalid'],
      index: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, 'Email is required'],
      match: [/\S+@\S+\.\S+/, 'Email is invalid'],
      index: true,
    },
    bio: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    age: { type: Number, min: 0 },
    image: { type: String },
    hash: { type: String },
    salt: { type: String },
  },
  {
    timestamps: true,
  }
);

userSchema.plugin(uniqueValidator, { message: 'This is already taken.' });

userSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
    .toString('hex');
};

userSchema.methods.passwordValidation = function (password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
    .toString('hex');
  return this.hash === hash;
};

userSchema.methods.toAuthJSON = function () {
  return {
    username: this.username,
    email: this.email,
    firstName: this.email,
    lastName: this.email,
    age: this.email,
    bio: this.bio,
    image: this.image,
  };
};

module.exports = mongoose.model('User', userSchema);
