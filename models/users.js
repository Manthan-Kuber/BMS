const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    aadharNo: {
        type: String,
        minlength: 12,
        maxLength:12,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    },
    Contact: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    }
});

userSchema.plugin(passportLocalMongoose);

const Users = mongoose.model('User', userSchema);
module.exports = Users;