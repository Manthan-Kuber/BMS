const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const TransactionSchema = new Schema({
    Amount: {
        type: Currency,
        min: 0,
        required: true
    },
    dateAndTime: {
        type: String,
        required: true
    },
    transactionType: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    } 
},
{timestamps: true});

const Transactions = mongoose.model('Transaction', TransactionSchema);
module.exports = Transactions;