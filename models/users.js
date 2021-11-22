const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
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
    Contact: {
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
        type: Number
    },
    accounts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    }]
});

userSchema.plugin(passportLocalMongoose);

const Users = mongoose.model('User', userSchema);
module.exports = Users;