var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var FacebookUser = require('../models').FacebookProfile;
var config = require('../config/authConfig');

module.exports = passport.use(new FacebookStrategy({
    clientID: config.facebookAuth.clientID,
    clientSecret: config.facebookAuth.clientSecret,
    callbackURL: config.facebookAuth.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {

        FacebookUser.findOne({
                where : {
                    profileId: profile.id
                }
            })
            .then(exists =>{
                if(exists) {
                    
                    done(null, exists);
                }else{
                    console.log(parseInt(profile.id));
                FacebookUser.create({
                    profileId : profile.id,
                    name: profile.displayName,
                    
                })
                .then(facebookuser =>{

                    done(null, facebookuser);
                })
                .catch(err => {
                    console.log({error : err});
                });
                }
            })
            

        /*
        ,(err, user) =>{
            console.log(user);
            if(err) {
                console.log(err);  // handle errors!
            }
            if (!err && user !== null) {
                done(null, user);
            }
            else{
                console.log(parseInt(profile.id));
                User.create({
                    id : parseInt(profile.id),
                    email: profile.displayName,
                    password: "123",
                })
                .then(user =>{
                    console.log(user);
                    done(null, user);
                })
                .catch(err => {
                    res.send({error : err});
                });
            }*/
     
      var pr = {
        oauthID: profile.id,
        name: profile.displayName,
        created: Date.now()
      };
      console.log(pr);
      
    }
  ));