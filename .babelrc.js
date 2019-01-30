const env = require('./env-config.js');
//npm i -D babel-plugin-transform-define

module.exports = {
  presets: ['next/babel'],
  plugins: [['transform-define', env]]
}