var Sequelize = require('sequelize');

var  connection = new Sequelize('demo_schema','root','',{
    host: 'localhost',
    dialect: 'mysql',
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
});

const User = connection.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

connection.sync()
  .then(() => User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });