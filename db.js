const mongoose = require('mongoose');
const { DOCKER_DATABASE_URL, LOCAL_DATABASE_URL, ENV } = require('./utils/getEnvVar');

module.exports = () => {
  mongoose.connect(
    ENV === 'DOCKER'
      ? DOCKER_DATABASE_URL
      : LOCAL_DATABASE_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  return mongoose.connection;
};