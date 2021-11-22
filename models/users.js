var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    aadharNo: {
        type: String,
        default: ''
    },
    emailAddress: {
        type: String,
        default: ''
    },
    contact: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        default: ''
    },
    dob: {
        type: String,
        default: ''
    },
    age: {
        type: Number,
        min: 18
    },
    accounts: {
        type: [ mongoose.Schema.Types.ObjectId ],
        ref: 'Account',
        default: []
    }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);