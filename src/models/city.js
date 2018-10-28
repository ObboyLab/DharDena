'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    city_name: DataTypes.STRING
  }, {});
  City.associate = function(models) {
    // associations can be defined here
  };
  return City;
};