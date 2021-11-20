const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const accountSchema = new Schema({
    accountNo: {
        type: String,
        min: 10,
        max: 10,
        required: true
    },
    accountType: {
        type: String,
        required: true
    },
    currentBalance: {
        type: Currency,
        required: true,
        default: 0,
        min: 0
    },
    accountName: {
        type: String,
        required: true
    },
    accountHolder: {
        type: mongoose.Schema.Types.firstname,
        ref: 'User'
    },
    branch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Branch'
    }
});

const Accounts = mongoose.model('Account', accountSchema);
module.exports = Accounts;