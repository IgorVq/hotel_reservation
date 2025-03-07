const RoomService = require('../services/roomsService');

async function findAllRooms(req, res){
    try {
        const rooms = await RoomService.findAllRooms();
        res.status(200);
        res.json(rooms);
    } catch (error)
     {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des chambres"});
    }
}

async function findOneRoom(req, res){
    try {
        const room = await RoomService.findOneRoom(req.params.id);
        res.status(200);
        res.json(room);
    } catch (error)
     {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération de la chambre"});
    }
}

async function findAvailableRooms(req, res){
    try {
        const rooms = await RoomService.findAvailableRooms();
        res.status(200);
        res.json(rooms);
    } catch (error)
     {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des chambres disponibles"});
    }
}

async function findAverageRoomsCapacity(req, res){
    try {
        const rooms = await RoomService.findAverageRoomsCapacity();
        res.status(200);
        res.json(rooms);
    } catch (error)
     {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération de la capacité moyenne des chambres"});
    }
}

async function findRoomsPriceAbove(req, res){
    try {
        const rooms = await RoomService.findRoomsPriceAbove(req.params.price);
        res.status(200);
        res.json(rooms);
    } catch (error)
     {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des chambre au prix supérieur à " + req.params.price});
    }
}

async function findRoomsPriceBelow(req, res){
    try {
        const rooms = await RoomService.findRoomsPriceBelow(req.params.price);
        res.status(200);
        res.json(rooms);
    } catch (error)
     {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des chambre au prix inférieur à " + req.params.price});
    }
}

async function findRoomsPriceBetween(req, res){
    try {
        const rooms = await RoomService.findRoomsPriceBetween(req.params.min, req.params.max);
        res.status(200);
        res.json(rooms);
    } catch (error)
     {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des chambre au prix compris entre " + req.params.min + " et " + req.params.max});
    }
}

async function findRoomsByType(req, res){
    try {
        const rooms = await RoomService.findRoomsByType(req.params.type);
        res.status(200);
        res.json(rooms);
    } catch (error)
     {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des chambre de type " + req.params.type});
    }
}

async function findRoomsCapacityAbove(req, res){
    try {
        const rooms = await RoomService.findRoomsCapacityAbove(req.params.capacity);
        res.status(200);
        res.json(rooms);
    } catch (error)
     {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des chambre à la capacité supérieur à " + req.params.capacity});
    }
}

async function findAvailableRoomsByType(req, res){
    try {
        const rooms = await RoomService.findAvailableRoomsByType(req.params.type);
        res.status(200);
        res.json(rooms);
    } catch (error)
     {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des chambres disponibles de type " + req.params.type});
    }
}

module.exports = {
    findAllRooms,
    findOneRoom,
    findAvailableRooms,
    findAverageRoomsCapacity,
    findRoomsPriceAbove,
    findRoomsByType,
    findRoomsCapacityAbove,
    findAvailableRoomsByType,
    findRoomsPriceBelow,
    findRoomsPriceBetween,
};