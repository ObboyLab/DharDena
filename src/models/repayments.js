'use strict';
module.exports = (sequelize, DataTypes) => {
  const repayments = sequelize.define('repayments', {
    from_active_loan_id: DataTypes.INTEGER,
    to_investor_investment_id: DataTypes.INTEGER,
    amount: DataTypes.DOUBLE,
    from_active_loan_balance: DataTypes.DOUBLE,
    to_investor_investment_balance: DataTypes.DOUBLE
  }, {});
  repayments.associate = function(models) {
    // associations can be defined here
  };
  return repayments;
};