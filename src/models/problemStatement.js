const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const ProblemStatement = sequelize.define('ProblemStatement', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  contactName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  companyName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { isEmail: true },
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  domainCategory: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expectedOutcome: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  confidentiality: {
    type: DataTypes.ENUM('Public', 'NDA Required'),
    defaultValue: 'Public',
  },
  status: {
    type: DataTypes.ENUM('Open', 'Under Review', 'Closed'),
    defaultValue: 'Open',
  },
}, {
  tableName: 'problem_statements',
  underscored: true,
});

module.exports = ProblemStatement;