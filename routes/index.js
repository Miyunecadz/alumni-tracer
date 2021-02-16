var registerUser = require('../controller/RegisterController');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/profile',function(req,res,next){
  res.render('profile');
})

router.get('/edit-profile', (req,res,next) => {
  res.render('edit-profile');
})

router.get('/register', (req,res,next)=>{
  res.render('register');
})

router.post('/register', registerUser.alumniRegister)

module.exports = router;
