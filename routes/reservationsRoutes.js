const express = require('express');
const router = express.Router();
const reservationsController = require('../controllers/reservationsController');

router.get('/', (req, res) => {reservationsController.findAllReservations(req, res)});
router.get('/status/:status', (req, res) => {reservationsController.findReservationsByStatus(req, res)});
router.get('/averageCost', (req, res) => {reservationsController.findAverageCost(req, res)});
router.get('/costAbove/:price', (req, res) => {reservationsController.findMinCost(req, res)});
router.get('/costBelow/:price', (req, res) => {reservationsController.findMaxCost(req, res)});
router.get('/types/:type', (req, res) => {reservationsController.findReservationsByType(req, res)});
router.get('/room/:roomNumber', (req, res) => {reservationsController.findReservationsByRoomNumber(req, res)});
router.get('/client/maxRoomsBooked', (req, res) => {reservationsController.findClientWithMaxRoomsBooked(req, res)});
router.get('/client/:id', (req, res) => {reservationsController.findReservationsByClientId(req, res)});
router.get('/:id', (req, res) => {reservationsController.findOneReservations(req, res)});


module.exports = router;