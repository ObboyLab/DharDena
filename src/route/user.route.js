
module.exports = function(app) {
 
    const users = require('../controller/user.controller');
 
    // Create a new Customer
    app.post('/api/users', users.create);
 
    // Retrieve all Customer
    app.get('/api/users', users.findAll);
}
