process.env.NODE_ENV = process.env.NODE_ENV || 'development'

require('babel-register')

module.exports = require('./server');
