const express = require('express');
const router = express.Router();
const inclusionsController = require('../controllers/inclusionsController');

router.get('/', (req, res) => {inclusionsController.findAllInclusions(req, res)});
router.get('/:id', (req, res) => {inclusionsController.findOneInclusion(req, res)});
router.get('/services/reservation/roomType/:type', (req, res) => {inclusionsController.findInclusionsByType(req, res)});
router.get('/services/reservation/:idReservation', (req, res) => {inclusionsController.findInclusionsByReservation(req, res)});
router.get('/services/reservation/totalCostBelow/:price', (req, res) => {inclusionsController.findServicesByReservationTotalCostBelow(req, res)});
router.get('/services/reservation/totalCostAbove/:price', (req, res) => {inclusionsController.findServicesByReservationTotalCostAbove(req, res)});
router.get('/services/reservation/:idReservation/totalPrice', (req, res) => {inclusionsController.findTotalPriceByReservation(req, res)});
router.get('/reservations/service/:serviceName', (req, res) => {inclusionsController.findReservationsByService(req, res)});

module.exports = router;