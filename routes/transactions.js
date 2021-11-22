var express = require('express');
var bodyParser = require('body-parser');
var Account = require('../models/accounts');
var Transaction = require('../models/transactions');
var User = require('../models/users');
var authenticate = require('../authenticate');

var transactionRouter = express.Router();
transactionRouter.use(bodyParser.json());

//Show the user transactions made by him.
//Use the /get account router to show the user his account Number list via a drop down menu from which he will make a transaction. 
transactionRouter.get('/', authenticate.verifyUser, (req, res, next) => {
    Account.findOne({accountNo: req.body.accountNo})
    .then((account) => {
        Transaction.findMany({senderAcount: account._id})
        .populate('Account')
        .then((transactions) => {
            if (transactions != null) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(transactions);
            }
        }, err => next(err))
        .catch((err) => {next(err)});
    }, err => next(err))
    .catch((err) => {next(err)});
});

//Take amount and transaction type as input
//Use the /get account router to show the user his account Number list via a drop down menu from which he will make a transaction. 
transactionRouter.post('/withdraw', authenticate.verifyUser, (req, res, next) => {
    User.findById(req.user._id)
    .then((user) => {
            Transaction.create({senderAcount: user.account, Amount: req.body.amount, transactionType: "Withdraw"})
            .then((transaction) => {
                if (req.body.description){
                    transaction.description = req.body.description;
                    transaction.save((err, transaction) => {
                        if (err) {
                            res.statusCode = 500;
                            res.setHeader('Content-Type', 'application/json');
                            res.json({err: err});
                        }
                    });
                }
                Account.findById(user.account)
                .then((account) => {
                    account.currentBalance -= req.body.amount;
                    account.save((err, account) => {
                        if (err) {
                            res.statusCode = 500;
                            res.setHeader('Content-Type', 'application/json');
                            res.json({err: err});
                          }
                    });
                })
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(transaction);
            }, err => next(err))
            .catch((err) => {next(err)});
    }, err => next(err))
    .catch((err) => {next(err)});
});

//Take amount and transaction type as input
//Use the /get account router to show the user his account Number list via a drop down menu from which he will make a transaction. 
transactionRouter.post('/deposit', authenticate.verifyUser, (req, res, next) => {
    User.findById(req.user._id)
    .then((user) => {
            Transaction.create({senderAcount: user.account, Amount: req.body.amount, transactionType: "Deposit"})
            .then((transaction) => {
                if (req.body.description) {
                    transaction.description = req.body.description;
                    transaction.save((err, transaction) => {
                        if (err) {
                            res.statusCode = 500;
                            res.setHeader('Content-Type', 'application/json');
                            res.json({err: err});
                        }
                    });
                }
                Account.findById(user.account)
                .then((account) => {
                    account.currentBalance += req.body.amount;
                    account.save((err, account) => {
                        if (err) {
                            res.statusCode = 500;
                            res.setHeader('Content-Type', 'application/json');
                            res.json({err: err});
                          }
                    });
                })
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(transaction);
            }, err => next(err))
            .catch((err) => {next(err)});
    }, err => next(err))
    .catch((err) => {next(err)});
});

//Take amount, recipient account number and transaction type as input
//Use the /get account router to show the user his account Number list via a drop down menu from which he will make a transaction. 
transactionRouter.post('/transfer', authenticate.verifyUser, (req, res, next) => {
    Account.findOne({accountNo: req.body.accountNo})
    .then((account) => {
        if (req.body.amount <= account.currentBalance) {
            Transaction.create({senderAcount: account._id, Amount: req.body.amount, transactionType: "Transfer"})
            .then((transaction) => {
                Account.findOne({recipientAccount: req.body.recipientAccount})
                .then((account1) => {
                    if (account1 != null) {
                        if (req.body.description)
                        transaction.description = req.body.description;
                        transaction.recipientAccount= account1._id;
                        transaction.save((err, transaction) => {
                            if (err) {
                                res.statusCode = 500;
                                res.setHeader('Content-Type', 'application/json');
                                res.json({err: err});
                            }
                            });
                        account.currentBalance =- req.body.amount;
                        account.save((err, account) => {
                            if (err) {
                                res.statusCode = 500;
                                res.setHeader('Content-Type', 'application/json');
                                res.json({err: err});
                            }
                        });
                        account1.currentBalance =+ req.body.amount;
                        account1.save((err, account1) => {
                            if (err) {
                                res.statusCode = 500;
                                res.setHeader('Content-Type', 'application/json');
                                res.json({err: err});
                            }
                        });
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json(transaction);
                    } 
                    else {
                        err = new Error("Recipient Account Number does not exist");
                        err.status = 403;
                        return next(err);
                    }
                }, err => next(err))
                .catch((err) => {next(err)});
            }, err => next(err))
            .catch((err) => {next(err)});
        }
        else {
            err = new Error("You do not have sufficient balance");
            err.status = 403;
            return next(err);
        }
    }, err => next(err))
    .catch((err) => {next(err)}); 
});

module.exports = transactionRouter;