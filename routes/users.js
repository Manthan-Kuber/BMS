var express = require('express');
const bodyParser = require('body-parser');
var User = require('../models/users');
var Account = require('../models/accounts');
var passport = require('passport');
var authenticate = require('../authenticate');

var router = express.Router();
router.use(bodyParser.json());

/* GET users listing. */

router.post('/signup', (req, res, next) => {
  User.register(new User({username: req.body.emailAddress}), req.body.password, 
  (err, user) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({err: err});
    }
    else {
      user.firstname = req.body.firstname;
      user.lastname = req.body.lastname;
      user.aadharNo = req.body.aadharNo;
      user.emailAddress = req.body.emailAddress;
      user.Contact = req.body.Contact;
      user.address = req.body.address;
      user.dob = req.body.dob;
      var age = Math.floor( yearsFromNow( user.dob ) );
      user.age = age;
      user.save((err, user) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({err: err});
        }
        passport.authenticate('local')(req, res, () => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({success: true, status: 'Registeration Successful!'});
      });
      });
    }
  });
});

router.post('/login', passport.authenticate('local'),
(req, res) => {
  var token = authenticate.getToken({_id: req.user._id})
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({success: true, token: token, status: 'You are successfully logged in!'});
});

router.get('/logout', (req, res, next) => {
  res.redirect('/');
});

module.exports = router;
