var express = require('express');
const bodyParser = require('body-parser');
var User = require('../models/users');
var Account = require('../models/accounts');
var Branch = require('../models/branches');
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
      // res.json({err: err});
      return next(err);
    }
    else {
      // var age = Math.floor( yearsFromNow( req.body.dob ) );
      // if (age < 18) {
      //   err = new Error("You are not eligible to create an account");
      //   err.status = 403;
      //   return next(err);
      // }
      user.firstname = req.body.firstname;
      user.lastname = req.body.lastname;
      user.aadharNo = req.body.aadharNo;
      user.emailAddress = req.body.emailAddress;
      user.Contact = req.body.Contact;
      user.address = req.body.address;
      user.dob = req.body.dob;
      // user.age = age;
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

//Account Creation. Make an account creation form on dashboard or provide link for it. 
//Allow user to input accountName, accountType and let him choose branch from available 
//branches in our database via a drop down menu
router.post('/account', authenticate.verifyUser, (req, res, next) => {
  var accNo = Math.floor((Math.random() * 9999999999) + 999999999);
  Branch.findOne({Name: req.body.branch})
  .then((branch) => {
    Account.create({accountNo: accNo, accountName: req.body.accountName, accountHolder: req.user._id, branch: branch._id})
    .then((account) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(account);
    }, err => next(err))
    .catch((err) => {next(err)});
  }, err => next(err))
  .catch((err) => {next(err)});
});

//To get all accounts of the logged in user.
//Use this for transactions.
//Also use this to show user all details of all his accounts.
router.get('/account', authenticate.verifyUser, (req, res, next) => {
  User.findById(req.user._id)
  .populate('Account')
  .then((user) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(user.accounts);
  }, err => next(err))
  .catch((err) => {next(err)});
});

module.exports = router;
