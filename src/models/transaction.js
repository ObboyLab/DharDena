'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    amount: DataTypes.DOUBLE,
    from_account_balance: DataTypes.DOUBLE,
    to_account_balance: DataTypes.DOUBLE,
    transaction_type: DataTypes.STRING,
    to_account_id: DataTypes.INTEGER,
    from_account_id: DataTypes.INTEGER
  }, {});
  Transaction.associate = function(models) {
    // associations can be defined here
  };
  return Transaction;
};