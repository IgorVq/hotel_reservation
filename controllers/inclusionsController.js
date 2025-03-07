const inclusionsService = require('../services/inclusionsService');

async function findAllInclusions(req, res){
    try {
        const clients = await inclusionsService.findAllInclusions();
        res.status(200);
        res.json(clients);
    } catch (error)
     {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des inclusions"});
    }
}

async function findOneInclusion(req, res){
    try {
        const id = req.params.id;
        const client = await inclusionsService.findOneInclusion(id);
        res.status(200);
        res.json(client);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération de l'inclusion avec l'id " + id});
    }
}

async function findInclusionsByReservation(req, res){
    try {
        const idReservation = req.params.idReservation;
        const inclusions = await inclusionsService.findInclusionsByReservation(idReservation);
        res.status(200);
        res.json(inclusions);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des inclusions de la réservation avec l'id " + idReservation});
    }
}

async function findTotalPriceByReservation(req, res){
    try {
        const idReservation = req.params.idReservation;
        const totalPrice = await inclusionsService.findTotalPriceByReservation(idReservation);
        res.status(200);
        res.json(totalPrice);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération du prix total des services de la réservation avec l'id " + idReservation});
    }
}

async function findInclusionsByType(req, res){
    try {
        const type = req.params.type;
        const inclusions = await inclusionsService.findInclusionsByType(type);
        res.status(200);
        res.json(inclusions);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des services pour les chambre de type " + type});
    }
}

async function findReservationsByService(req, res){
    try {
        const serviceName = req.params.serviceName;
        const reservations = await inclusionsService.findReservationsByService(serviceName);
        res.status(200);
        res.json(reservations);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des réservations pour le service " + serviceName});
    }
}

async function findServicesByReservationTotalCostBelow(req, res){
    try {
        const price = req.params.price;
        const services = await inclusionsService.findServicesByReservationTotalCostBelow(price);
        res.status(200);
        res.json(services);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des services pour les réservations dont le prix total est inférieur à " + price});
    }
}

async function findServicesByReservationTotalCostAbove(req, res){
    try {
        const price = req.params.price;
        const services = await inclusionsService.findServicesByReservationTotalCostAbove(price);
        res.status(200);
        res.json(services);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des services pour les réservations dont le prix total est supérieur à " + price});
    }
}

module.exports = {
    findAllInclusions,
    findOneInclusion,
    findInclusionsByReservation,
    findTotalPriceByReservation,
    findInclusionsByType,
    findReservationsByService,
    findServicesByReservationTotalCostBelow,
    findServicesByReservationTotalCostAbove,
};