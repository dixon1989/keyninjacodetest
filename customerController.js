
// customerController.js
// Import customerModel
Customer = require('./customerModel');
//Handle index actions
exports.index = function (req, res) {
    Customer.get(function (err, customers) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Customer details retrieved successfully",
            data: customers
        });
    });
};
// Handle customers detail actions
exports.new = function (req, res) {
    var customer = new Customer();
    customer.firstName = req.body.firstName;
    customer.lastName = req.body.lastName;
    customer.email = req.body.email;
// save the customer details and check for errors
    customer.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New Customer has been created!',
            data: customer
        });
    });
};
// Handle view all customers
exports.view = function (req, res) {
    Customer.findById(req.params.customer_id, function (err, customer) {
        if (err)
            res.send(err);
        res.json({
            message: 'Customer details being displayed...',
            data: customer
        });
    });
};
// Handle update customer details
exports.update = function (req, res) {
    Customer.findById(req.params.customer_id, function (err, customer) {
        if (err)
            res.send(err);
        customer.firstName = req.body.firstName;
        customer.lastName = req.body.lastName;
        customer.email = req.body.email;
        // save the customer details and check for errors
        customer.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Customer Details has been updated',
                data: customer
            })
        });
    });
};
// Delete customers details
exports.delete = function (req, res) {
    Customer.remove({
        _id: req.params.customer_id
    }, function (err, customer) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Customer has been deleted'
        });
    });
};
