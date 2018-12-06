var express = require('express');
var router = express.Router();
var userController = require('../controllers').user;
var cityController = require('../controllers').city;
const profileController = require('../controllers').profile;
const transactionController = require('../controllers').transaction;
const repaymentController = require('../controllers').repayment;
const investorInvestmentController = require('../controllers').investor_investment;
const activeLoanController = require('../controllers').active_loan;
var fbAuth = require('./authentication');
var passport = require('passport');


// serialize and deserialize
passport.serializeUser(function(user, done) {
  console.log('serializeUser: ' + user);
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  console.log("deserial:"+ user);
  done(null, user);
});


/* GET home page. */
router.get('/', function (req, res) {
  var html = "<ul>\
    <li><a href='/auth/facebook'>facebook</a></li>\
    <li><a href='/logout'>logout</a></li>\
  </ul>";

  // dump the user for debugging
  if (req.isAuthenticated()) {
    html += "<p>authenticated as user:</p>"
    html += "<pre>" + JSON.stringify(req.user, null, 4) + "</pre>";
  }

  res.send(html);
});

router.get('/logout', function(req, res){
  console.log('logging out');
  req.logout();
  res.redirect('/');
});

/* user Router */
router.get('/api/user',ensureAuthenticated,userController.findAll);
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


router.get('/account', ensureAuthenticated, function(req, res){

  
      console.log(req);  // handle errors
   
});

router.get('/auth/facebook',

  passport.authenticate('facebook')
  /*function(req, res){
    console.log(req);
  }*/
  );
router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  });

// test authentication
function ensureAuthenticated(req, res, next) {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/');
}




module.exports = router;
