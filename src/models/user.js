'use strict';
module.exports = (connection, Sequelize) => {
    const User = connection.define('User',{
        uuid : {
            type : Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true
        },
        email : {
            type : Sequelize.STRING
        },
        password :{
            type : Sequelize.STRING
        }
    });

    return User;
};