const express = require('express');
const router = express.Router();
const paymentsController = require('../controllers/paymentsController');

router.get('/', (req, res) => {paymentsController.findAllPayments(req, res)});
router.get('/method/:method', (req, res) => {paymentsController.findPaymentsByMethod(req, res)});
router.get('/total/date/:year/:month', (req, res) => {paymentsController.totalPaymentsByMonth(req, res)});
router.get('/priceAbove/:price', (req, res) => {paymentsController.priceAbove(req, res)});
router.get('/priceBelow/:price', (req, res) => {paymentsController.priceBelow(req, res)});
router.get('/reservationsStatus/:status', (req, res) => {paymentsController.reservationsStatus(req, res)});
router.get('/total/status/:status', (req, res) => {paymentsController.totalPaymentsByStatus(req, res)});
router.get('/:id', (req, res) => {paymentsController.findOnePayment(req, res)});

module.exports = router;