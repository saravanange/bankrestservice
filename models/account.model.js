const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * Account Schema
 */
var AccountSchema = new Schema({
    account_no: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    balance:{ type: Number},
    account_type: String,
    password: String,
    date_of_opening: {
        type: Date,
        required: true,
        default: Date.now
    }


});


module.exports = mongoose.model('Account', AccountSchema,'Account');
// Export the model