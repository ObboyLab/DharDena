var express = require('express');
var router = express.Router();
const userController = require('../controllers').user;
const cityController = require('../controllers').city;
const profileController = require('../controllers').profile;
const transactionController = require('../controllers').transaction;



/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({'response' : "Hi"});
});



/* user Router */
router.get('/api/user', userController.findAll);
router.get('/api/user/:email', userController.findOne);
router.post('/api/user', userController.create);
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
router.post('/api/profile', transactionController.create);


module.exports = router;
