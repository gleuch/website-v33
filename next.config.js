require('dotenv').config();

const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');

module.exports = withCss(withSass({
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV || 'development',
  },
}));
