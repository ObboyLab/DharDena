var express = require('express');
var router = express.Router();

const userController = require('../controllers').user;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* user Router */
router.get('/api/user', userController.findAll);
router.get('/api/user/:email', userController.findOne);
router.post('/api/user', userController.create);
router.put('/api/user/:email', userController.updateUserEmail);
router.delete('/api/user/:email', userController.deleteUser);


module.exports = router;
