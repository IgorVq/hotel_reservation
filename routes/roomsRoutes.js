const express = require('express');
const router = express.Router();
const roomsController = require('../controllers/roomsController');

//toutes les routes de ce fichier commence par /rooms
router.get('/', (req, res) => {roomsController.findAllRooms(req, res)});

router.get('/available', (req, res) => {roomsController.findAvailableRooms(req, res)});

router.get('/average_capacity', (req, res) => {roomsController.findAverageRoomsCapacity(req, res)});

router.get('/priceAbove/:price', (req, res) => {roomsController.findRoomsPriceAbove(req, res)});

router.get('/priceBelow/:price', (req, res) => {roomsController.findRoomsPriceBelow(req, res)});

router.get('/price/:min/:max', (req, res) => {roomsController.findRoomsPriceBetween(req, res)});

router.get('/type/:type', (req, res) => {roomsController.findRoomsByType(req, res)});

router.get('/capacityAbove/:capacity', (req, res) => {roomsController.findRoomsCapacityAbove(req, res)});

router.get('/type/:type/available', (req, res) => {roomsController.findAvailableRoomsByType(req, res)});

router.get('/:id', (req, res) => {roomsController.findOneRoom(req, res)});


module.exports = router;
