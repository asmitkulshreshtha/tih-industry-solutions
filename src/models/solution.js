const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');
const ProblemStatement = require('./problemStatement');

const Solution = sequelize.define('Solution', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  startupName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contactName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { isEmail: true },
  },
  documentUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('Pending', 'Accepted', 'Rejected'),
    defaultValue: 'Pending',
  },
}, {
  tableName: 'solutions',
  underscored: true,
});

Solution.belongsTo(ProblemStatement, { foreignKey: 'problem_statement_id', as: 'problem' });
ProblemStatement.hasMany(Solution, { foreignKey: 'problem_statement_id', as: 'solutions' });

module.exports = Solution;