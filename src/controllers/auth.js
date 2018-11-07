
const jwt = require('jsonwebtoken');

module.exports = {
   checkAuth (req, res, next){
    
    var token = req.header['token'];
    console.log(token);
    if (!token)
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, 'yo-its-a-secret', (err, decoded) => {
        if (err)
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

    req.user = {
         email: decoded.email,
         id: decoded.id
    };
    next();
});
}
}

