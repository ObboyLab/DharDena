'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    city_name: {
      type : DataTypes.STRING,
      allowNull : false
    }
  }, {});
  City.associate = function(models) {
    // associations can be defined here
  };
  return City;
};