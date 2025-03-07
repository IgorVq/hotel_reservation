const serviceService = require('../services/servicesService');

async function findAllServices(req, res){
    try {
        const clients = await serviceService.findAllServices();
        res.status(200);
        res.json(clients);
    } catch (error)
     {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des services"});
    }
}

async function findOneService(req, res){
    try {
        const id = req.params.id;
        const service = await serviceService.findOneService(id);
        res.status(200);
        res.json(service);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération du service " + req.params.id});
    }
}

async function findServicesPriceAbove(req, res){
    try {
        const price = req.params.price;
        const services = await serviceService.findServicesPriceAbove(price);
        res.status(200);
        res.json(services);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des services aux prix supérieurs à " + req.params.price});
    }
}

async function findServicesPriceBelow(req, res){
    try {
        const price = req.params.price;
        const services = await serviceService.findServicesPriceBelow(price);
        res.status(200);
        res.json(services);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des services aux prix inférieurs à " + req.params.price});
    }
}

async function findMostUsedServices(req, res){
    try {
        const services = await serviceService.findMostUsedServices();
        res.status(200);
        res.json(services);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des services les plus utilisés"});
    }
}

async function findLessExpensiveService(req, res){
    try {
        const service = await serviceService.findLessExpensiveService();
        res.status(200);
        res.json(service);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération du service le moins cher"});
    }
}

async function findMostExpensiveService(req, res){
    try {
        const service = await serviceService.findMostExpensiveService();
        res.status(200);
        res.json(service);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération du service le plus cher"});
    }
}

module.exports = {
    findAllServices,
    findOneService,
    findServicesPriceAbove,
    findServicesPriceBelow,
    findMostUsedServices,
    findLessExpensiveService,
    findMostExpensiveService,
};