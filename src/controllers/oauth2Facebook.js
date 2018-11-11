//load all things we need
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy  = require('passport-facebook').Strategy;

//load up the user model
const User = require('../models/user');

//load the auth variables
const configAuth = require('../config/authConfig');

module.exports = function(passport){

    // used to serialize the user for the session
    passport.serializeUser((user, done)=>{
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser((id, done)=>{
        User.findById(id, (err, user) =>{
            done(err, user);
        });
    });

    passport.use(new FacebookStrategy({

        // pull in our app id and secret from our auth.js file
        clientID        : configAuth.facebookAuth.clientID,
        clientSecret    : configAuth.facebookAuth.clientSecret,
        callbackURL     : configAuth.facebookAuth.callbackURL

    },
    function(accessToken, refreshToken, profile, done) {
        process.nextTick(function () {
            console.log(accessToken);
          //Check whether the User exists or not using profile.id
          //Further DB code.
          return done(null, profile);
        });
      }
    ));
}