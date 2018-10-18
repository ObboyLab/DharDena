const db  = require('../config/db.config');
const User = db.users;
// Post a Customer
exports.create = (req, res) => {	
	// Save to MySQL database
	
	var user;
	User.create({ 
	  email: req.body.email,
	  password: req.body.password
	}).then(createdCustomer => {		
		// Send created customer to client
        customer = createdCustomer;
        res.send(customer);
    });
};
 
// FETCH all Customers include Addresses
exports.findAll = (req, res) => {
	User.findAll({
        attributes: [['uuid', 'userId'], 'email', ['password','pass']],
        limit : 10
	}).then((users) => {
        res.status(200).json({'result': users});
    });
};