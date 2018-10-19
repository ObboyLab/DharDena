const db  = require('../config/db.config');
const User = db.users;
const connection= db.connection;
// Post a User
exports.create = (req, res) => {	
	// Save to MySQL database

	User.create({ 
	  email: req.body.email,
	  password: req.body.password
	}).then(user => {		
		// Send created user to client
        res.send(user);
    });
};
 
// FETCH all Customers include Addresses
exports.findAll = (req, res) => {
    User.findAll()
  .then(users => {
    // We don't need spread here, since only the results will be returned for select queries
    res.send(users);
  });
};

// FETCH one user
exports.findOne = (req, res) => {
    User.findOne(
        {where : {email : req.params.email}})
    .then(user => {
        res.send(user);
    });
};

exports.updateUserEmail = (req, res) => {
    User.findOne(
        {where : {email : req.params.email}}
    )
    .then( user =>{
        user.updateAttributes({
            email : 'Hi'
        });
        res.send(user)
    });
};

exports.deleteUser = (req, res) => {
    User.destroy({
        where : {email: req.params.email}
    })
    .then(deletedUser => {
        console.log(`Has the Max been deleted? 1 means yes, 0 means no: ${deletedUser}`);
        res.json({ deleted : 'yes'}).send();
      });
}