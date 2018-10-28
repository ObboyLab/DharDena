'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    middle_name: DataTypes.STRING,
    dob: DataTypes.DATE,
    streetAddress: DataTypes.STRING,
    tfn: DataTypes.STRING,
    post_code: DataTypes.INTEGER,
    phone_number: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    city_id: DataTypes.INTEGER
  }, {});
  Profile.associate = function(models) {
    // associations can be defined here
  };
  return Profile;
};