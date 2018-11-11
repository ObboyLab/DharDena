var express = require('express');
var router = express.Router();
const userController = require('../controllers').user;
const cityController = require('../controllers').city;
const profileController = require('../controllers').profile;
const transactionController = require('../controllers').transaction;
const repaymentController = require('../controllers').repayment;
const investorInvestmentController = require('../controllers').investor_investment;
const activeLoanController = require('../controllers').active_loan;
const authController = require('../controllers').auth_controll;
const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;
const facebookAuthConfig = require('../config/authConfig').facebookAuth;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({'response' : "Hi"});
});



/* user Router */
router.get('/api/user',authController.checkAuth,userController.findAll);
router.post('/api/user', userController.register);
router.post('/api/user/login', userController.login);
router.put('/api/user/:email', userController.updateUserEmail);
router.delete('/api/user/:email', userController.deleteUser);


/* city Router */
router.get('/api/city', cityController.findAll);
router.get('/api/city/:city_name', cityController.findOne);
router.post('/api/city', cityController.create);
router.put('/api/city/:city_name', cityController.updateCityName);
router.delete('/api/city/:city_name', cityController.deleteCity);


/* Profile Router */
router.get('/api/profile', profileController.findAll);
router.get('/api/profile/:phone_number', profileController.findOneUsingPhoneNumber);
router.get('/api/profile/:user_id', profileController.findOneUsingUserID);
router.post('/api/profile', profileController.create);
router.put('/api/profile/:user_id', profileController.updateFirstName);
router.delete('/api/profile/:user_id', profileController.deleteProfile);


/* Transaction Router */

router.get('/api/transaction', transactionController.findAll);
router.post('/api/transaction', transactionController.create);


/* Repayment Router */
router.get('/api/repayment', repaymentController.findAll);
router.post('/api/repayment', repaymentController.create);

/* Active loan Router */
router.get('/api/active_loan', activeLoanController.findAll);
router.post('/api/active_loan', activeLoanController.create);


/* Investor Investment Router */
router.get('/api/investor_investment', investorInvestmentController.findAll);
router.post('/api/investor_investment', investorInvestmentController.create);



/*Passport Router*/

// Configure the Facebook strategy for use by Passport.
//
// OAuth 2.0-based strategies require a `verify` function which receives the
// credential (`accessToken`) for accessing the Facebook API on the user's
// behalf, along with the user's profile.  The function must invoke `cb`
// with a user object, which will be set at `req.user` in route handlers after
// authentication.
passport.use(new Strategy({
  clientID: facebookAuthConfig.clientID,
  clientSecret: facebookAuthConfig.clientSecret,
  callbackURL: facebookAuthConfig.callbackURL
},
function(accessToken, refreshToken, profile, cb) {
  console.log("Access token : " +accessToken +"\n");
  console.log(profile);

  // In this example, the user's Facebook profile is supplied as the user
  // record.  In a production-quality application, the Facebook profile should
  // be associated with a user record in the application's database, which
  // allows for account linking and authentication with other identity
  // providers.
  return cb(null, profile);
}));


// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  In a
// production-quality application, this would typically be as simple as
// supplying the user ID when serializing, and querying the user record by ID
// from the database when deserializing.  However, due to the fact that this
// example does not have a database, the complete Facebook profile is serialized
// and deserialized.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(id, done) {
  done(null, obj);
});

router.get('/login',
  function(req, res){
    res.render('login');
  });

router.get('/login/facebook',
  () => {
    console.log("Hi");
    passport.authenticate('facebook')
});

router.get('/login/facebook/return', 
  passport.authenticate('facebook', { failureRedirect: '/api/user' }),
  function(req, res) {
    res.redirect('/');
  });



module.exports = router;
