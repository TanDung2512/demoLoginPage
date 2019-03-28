var express = require('express');
var router = express.Router();
var infoModel = require('../models/userInfo');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', (req,res,next) => {

  infoModel.findOne({'email':req.body.email},'password', (err, person) => {
    if(err) return console.error(err);
    if(req.body.password === person.password){
      res.send("authenticate");
    }
    else {
      res.send("not correct");
    }
  })
});

router.post('/register', (req,res,next) => {
  var newUser = new infoModel({name: req.body.userName,email : req.body.email, password : req.body.password});
  newUser.save( (err,book) => {
    if (err) return console.error(err);
    console.log("save to collection " + book);
    res.send("okkk");
  })
});

module.exports = router;
