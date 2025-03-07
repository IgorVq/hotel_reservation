const express = require('express');
const router = express.Router();
const clientsController = require('../controllers/clientsController');

router.get('/', (req, res) => {clientsController.findAllClients(req, res)});

router.get('/booking/topCost', (req, res) => {clientsController.findClientByTopCostBooking(req, res)});

router.get('/booking/type/:type', (req, res) => {clientsController.findClientsByBookingType(req, res)});

router.get('/booking/minCost/:amount', (req, res) => {clientsController.findClientsByMinCostBooking(req, res)});

router.get('/booking/maxCost/:amount', (req, res) => {clientsController.findClientsByMaxCostBooking(req, res)});

router.get('/booking/cost/:minCost/:maxCost', (req, res) => {clientsController.findClientsByCostBooking(req, res)});

router.get('/booking/:year', (req, res) => {clientsController.findClientsByBookingYear(req, res)});

router.get('/booking/:year/:month', (req, res) => {clientsController.findClientsByBookingYearMonth(req, res)});

router.get('/registrationDate/:year/:month', (req, res) => {clientsController.findClientsByRegistrationDate(req, res)});

router.get('/:id', (req, res) => {clientsController.findOneClient(req, res)});

module.exports = router;