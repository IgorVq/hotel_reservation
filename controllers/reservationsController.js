const reservationService = require('../services/reservationsService');

async function findAllReservations(req, res){
    try {
        const clients = await reservationService.findAllReservations();
        res.status(200);
        res.json(clients);
    } catch (error)
     {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des reservations"});
    }
}

async function findOneReservations(req, res){
    try {
        const clients = await reservationService.findOneReservations(req.params.id);
        res.status(200);
        res.json(clients);
    } catch (error)
     {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération de la reservation avec l'id:" + req.params.id});
    }
}

async function findReservationsByStatus(req, res){
    try {
        const clients = await reservationService.findReservationsByStatus(req.params.status);
        res.status(200);
        res.json(clients);
    } catch (error)
     {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des reservations avec le status:" + req.params.status});
    }
}

async function findAverageCost(req, res){
    try {
        const clients = await reservationService.findAverageCost();
        res.status(200);
        res.json(clients);
    } catch (error)
     {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération du prix moyen des reservations"});
    }
}

async function findMinCost(req, res){
    try {
        const clients = await reservationService.findMinCost(req.params.price);
        res.status(200);
        res.json(clients);
    } catch (error)
     {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération du prix minimum des reservations"});
    }
}

async function findMaxCost(req, res){
    try {
        const clients = await reservationService.findMaxCost(req.params.price);
        res.status(200);
        res.json(clients);
    } catch (error)
     {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération du prix maximum des reservations"});
    }
}

async function findReservationsByType(req, res){
    try {
        const clients = await reservationService.findReservationsByType(req.params.type);
        res.status(200);
        res.json(clients);
    } catch (error)
     {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des reservations de type:" + req.params.type});
    }
}

async function findReservationsByRoomNumber(req, res){
    try {
        const clients = await reservationService.findReservationsByRoomNumber(req.params.roomNumber);
        res.status(200);
        res.json(clients);
    } catch (error)
     {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des reservations de la chambre:" + req.params.roomNumber});
    }
}

async function findReservationsByClientId(req, res){
    try {
        const clients = await reservationService.findReservationsByClientId(req.params.id);
        res.status(200);
        res.json(clients);
    } catch (error)
     {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des reservations du client:" + req.params.id});
    }
}

async function findClientWithMaxRoomsBooked(req, res){
    try {
        const clients = await reservationService.findClientWithMaxRoomsBooked();
        res.status(200);
        res.json(clients);
    } catch (error)
     {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération du client avec le plus de chambres réservées"});
    }
}


module.exports = {
    findAllReservations,
    findOneReservations,
    findReservationsByStatus,
    findAverageCost,
    findMinCost,
    findMaxCost,
    findReservationsByType,
    findReservationsByRoomNumber,
    findReservationsByClientId,
    findClientWithMaxRoomsBooked,
};