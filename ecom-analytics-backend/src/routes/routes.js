const express = require('express');
const { getTotalSales, getSalesGrowth, getNewCustomers, getRepeatCustomers, getGeographicalDistribution, getCustomerLifetimeValue } = require('../controllers/controllers');

const router = express.Router();

router.get('/total-sales', getTotalSales);
router.get('/sales-growth', getSalesGrowth);
router.get('/new-customers', getNewCustomers);
router.get('/repeat-customers', getRepeatCustomers);
router.get('/geographical-distribution', getGeographicalDistribution);
router.get('/customer-lifetime-value', getCustomerLifetimeValue);

module.exports = router;
