'use strict';
module.exports = (sequelize, DataTypes) => {
  const ActiveLoan = sequelize.define('ActiveLoan', {

    /* 
    Status can be:
      - pending approval
      - unfunded
      - funded
      - defaulted
      - settled
    */
    status: DataTypes.INTEGER,
    
    borrower_id: DataTypes.INTEGER,
    catagory: DataTypes.STRING,
    opening_balance: DataTypes.DOUBLE,
    interest_rate: DataTypes.DOUBLE,
    periodic_repayment_amount: DataTypes.DOUBLE
  }, {});
  ActiveLoan.associate = function(models) {
    // associations can be defined here
  };
  return ActiveLoan;
};