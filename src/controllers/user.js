const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models').User;

// FETCH all Customers include Addresses
module.exports={


 updateUserEmail(req, res) {
    User.findOne(
        {where : {email : req.params.email}}
    )
    .then( user =>{
        user.updateAttributes({
            email : 'Hi'
        });
        res.send(user);
    });
},

 deleteUser(req, res){
    User.destroy({
        where : {email: req.params.email}
    })
    .then(deletedUser => {
        console.log(`Has the Max been deleted? 1 means yes, 0 means no: ${deletedUser}`);
        res.json({ deleted : 'yes'}).send();
      });
},

 login(req, res){

     User.findOne(
            {
                 where: {email: req.body.email},
                 raw: true
        })
        .then(user => {
            console.log(user.email);
            if (!user)
                throw new Error('Authentication failed. User not found.');
            if (!bcrypt.compareSync(req.body.password || '', user.password))
                throw new Error('Authentication failed. Wrong password.');
            const payload = {
                email: user.email,
                id: user.id,
                time: new Date()
            };
            console.log(user);
            var token = jwt.sign(payload, 'yo-its-a-secret', {
                expiresIn: '6h'
            });
            res.send({
                success: true,
                data: { token }
            });
        })
        .catch(err => {
            res.send({
                 success: false,
                 message: err.message //not the best error handling.
                 //for better error handling visit github repository, link provided below
            });
        });
}
,
 

 register(req, res){

        return User.findOne({
            where :{email: req.body.email}
        })
        .then(exists => {
            if(exists){
            res.send({
                success: false,
                message: 'Registration failed. User with this email already registered.'
            });    

         User.create({
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 2)
        })
        .then(user =>{
            console.log(user);
            res.send({success: true});
        })
        .catch(err => {
            res.send({error : err});
        });
    
        }
    })
}

/*-----------*/
}