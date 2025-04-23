const sequelize = require('../config/db.js');
const ProblemStatement = require('./problemStatement');
const Solution = require('./solution');

module.exports = { sequelize, ProblemStatement, Solution };