'use strict';
module.exports = (sequelize, DataTypes) => {
  const InvestorInvestment = sequelize.define('InvestorInvestment', {
    loan_id: DataTypes.INTEGER,
    investor_id: DataTypes.INTEGER,
    opening_balance: DataTypes.DOUBLE
  }, {});
  InvestorInvestment.associate = function(models) {
    // associations can be defined here
  };
  return InvestorInvestment;
};