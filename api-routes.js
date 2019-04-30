// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to KeyNinja Simple Tests!',
    });
});
// Import contact controller
var customerController = require('./customerController');
// Contact routes
router.route('/customer')
    .get(customerController.index)
    .post(customerController.new);
router.route('/customer/:customer_id')
    .get(customerController.view)
    .patch(customerController.update)
    .put(customerController.update)
    .delete(customerController.delete);
// Export API routes
module.exports = router;