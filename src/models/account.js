'use strict';
module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    account_type: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  Account.associate = function(models) {
    // associations can be defined here
  };
  return Account;
};