/* eslint-disable no-undef */
require('dotenv').config();

const {
  APP_PORT,
  LOCAL_DATABASE_URL,
  DOCKER_DATABASE_URL,
  ENV,
  ACCESS_TOKEN_SECRET
} = process.env;

module.exports = {
  APP_PORT,
  LOCAL_DATABASE_URL,
  DOCKER_DATABASE_URL,
  ENV,
  ACCESS_TOKEN_SECRET
};