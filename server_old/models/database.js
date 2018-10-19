const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/dhardena'

const client = new pg.Client(connectionString);
client.connect();

client.query(
    'CREATE TABLE users(id SERIAL PRIMARY KEY, email TEXT NOT NULL UNIQUE, password_digest TEXT NOT NULL )', (err, res) =>{
        if (err){
            console.log(err.stack);
        }
        else{
            console.log(res);
        }
    client.end()
});


