//env variable for database
const env = {
  database: 'dhardena',
  username: 'root',
  password: '',
  host: 'localhost',
  dialect: 'mysql',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};
 
module.exports = env;