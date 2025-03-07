const ClientService = require('../services/clientsService');

async function findAllClients(req, res){
    try {
        const clients = await ClientService.findAllClients();
        res.status(200);
        res.json(clients);
    } catch (error)
     {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des clients"});
    }
}

async function findClientsByBookingYear(req, res){
    try {
        const clients = await ClientService.findClientsByBookingYear(req.params.year);
        res.status(200);
        res.json(clients);
    } catch (error)
     {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des clients qui ont reservé en " + req.params.year});
    }
}

async function findClientsByMinCostBooking(req, res){
    try {
        const clients = await ClientService.findClientsByMinCostBooking(req.params.amount);
        res.status(200);
        res.json(clients);
    } catch (error)
     {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des clients qui ont reservé pour un montant minimum de " + req.params.amount});
    }
}

async function findClientsByMaxCostBooking(req, res){
    try {
        const clients = await ClientService.findClientsByMaxCostBooking(req.params.amount);
        res.status(200);
        res.json(clients);
    } catch (error)
     {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des clients qui ont reservé pour un montant maximum de " + req.params.amount});
    }
}

async function findClientsByCostBooking(req, res){
    try {
        const clients = await ClientService.findClientsByCostBooking(req.params.minCost, req.params.maxCost);
        res.status(200);
        res.json(clients);
    } catch (error)
     {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des clients qui ont reservé pour un montant compris entre " + req.params.minCost + " et " + req.params.maxCost});
    }
}

async function findClientsByRegistrationDate(req, res){
    try {
        const clients = await ClientService.findClientsByRegistrationDate(req.params.year, req.params.month);
        res.status(200);
        res.json(clients);
    } catch (error)
     {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des clients qui se sont inscrits en " + req.params.year + " et au mois de " + req.params.month});
    }
}

async function findClientsByBookingYearMonth(req, res){
    try {
        const clients = await ClientService.findClientsByBookingYearMonth(req.params.year, req.params.month);
        res.status(200);
        res.json(clients);
    } catch (error)
     {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des clients qui ont reservé en " + req.params.year + " et au mois de " + req.params.month});
    }
}

async function findClientsByBookingType(req, res){
    try {
        const clients = await ClientService.findClientsByBookingType(req.params.type);
        res.status(200);
        res.json(clients);
    } catch (error)
     {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des clients qui ont reservé une chambre de type " + req.params.type});
    }
}

async function findClientByTopCostBooking(req, res){
    try {
        const clients = await ClientService.findClientByTopCostBooking();
        res.status(200);
        res.json(clients);
    } catch (error)
     {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération du client qui a reservé pour le montant le plus élevé"});
    }
}

module.exports = {
    findAllClients,
    findClientsByBookingYear,
    findClientsByMinCostBooking,
    findClientsByMaxCostBooking,
    findClientsByCostBooking,
    findClientsByRegistrationDate,
    findClientsByBookingYearMonth,
    findClientsByBookingType,
    findClientByTopCostBooking,
};