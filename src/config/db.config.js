const env = require('./env');

const Sequelize = require('sequelize');
const connection = new Sequelize(env.database, env.username, env.password, {
    host : env.host,
    dialect : env.dialect,

    pool: {
        max: env.pool.max,
        min: env.pool.min,
        acquire: env.pool.acquire,
        idle: env.pool.idle
    }
});
const db = {};

db.Sequelize = Sequelize;
db.connection = connection;


//Will import every model here 
db.users = require('../model/user.model')(connection, Sequelize);
//db.profiles = require('../model/profile.model.js')(connection, Sequelize);
//will declare the relationship 

module.exports = db;