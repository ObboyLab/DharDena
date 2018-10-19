
module.exports = function(app) {
 
    const users = require('../controller/user.controller');
 
    // Create a new user
    app.post('/api/users', users.create);
 
    // Retrieve all user
    app.get('/api/users', users.findAll);

    //Retrieve one user
    app.get('/api/user/:email',users.findOne);

    //Update one user
    app.patch('/api/user/:email', users.updateUserEmail);

    //Delete one user
    app.delete('/api/user/:email', users.deleteUser);
}
