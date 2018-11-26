'use strict';
module.exports = (sequelize, DataTypes) => {
  const FacebookProfile = sequelize.define('FacebookProfile', {
    profileId: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  FacebookProfile.associate = function(models) {
    // associations can be defined here
  };
  return FacebookProfile;
};