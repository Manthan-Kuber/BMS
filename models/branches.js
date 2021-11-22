const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const branchSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    IFSC: {
        type: String,
        minlength: 6,
        maxlength: 6,
        required: true
    }
});

const Branches = mongoose.model('Branch', branchSchema);
module.exports = Branches;