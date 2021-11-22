const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const accountSchema = new Schema({
    accountNo: {
        type: String,
        minlength: 10,
        maxlength: 10,
        required: true
    },
    currentBalance: {
        type: Currency,
        default: 0,
        min: 0
    },
    accountName: {
        type: String,
        required: true
    },
    accountHolder: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Accounts = mongoose.model('Account', accountSchema);
module.exports = Accounts;