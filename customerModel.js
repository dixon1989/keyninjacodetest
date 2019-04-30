// customerModel.js
var mongoose = require('mongoose');
// Setup schema
var customerSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Customer Model
var Customer = module.exports = mongoose.model('customer', customerSchema);
module.exports.get = function (callback, limit) {
    Customer.find(callback).limit(limit);
}
