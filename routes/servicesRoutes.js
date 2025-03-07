const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/servicesController');

router.get('/', (req, res) => {servicesController.findAllServices(req, res)});
router.get('/priceAbove/:price', (req, res) => {servicesController.findServicesPriceAbove(req, res)});
router.get('/priceBelow/:price', (req, res) => {servicesController.findServicesPriceBelow(req, res)});
router.get('/mostUsed', (req, res) => {servicesController.findMostUsedServices(req, res)});
router.get('/lessExpensive', (req, res) => {servicesController.findLessExpensiveService(req, res)});
router.get('/mostExpensive', (req, res) => {servicesController.findMostExpensiveService(req, res)});
router.get('/:id', (req, res) => {servicesController.findOneService(req, res)});

module.exports = router;