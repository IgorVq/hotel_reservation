const paymentService = require('../services/paymentsService');

async function findAllPayments(req, res){
    try {
        const clients = await paymentService.findAllPayments();
        res.status(200);
        res.json(clients);
    } catch (error)
     {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des paiements"});
    }
}

async function findOnePayment(req, res){
    try {
        const id = req.params.id;
        const client = await paymentService.findOnePayment(id);
        res.status(200);
        res.json(client);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération du paiement"});
    }
}

async function findPaymentsByMethod(req, res){
    try {
        const method = req.params.method;
        const payments = await paymentService.findPaymentsByMethod(method);
        res.status(200);
        res.json(payments);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des paiements"});
    }
}

async function totalPaymentsByMonth(req, res){
    try {
        const year = req.params.year;
        const month = req.params.month;
        const total = await paymentService.totalPaymentsByMonth(year, month);
        res.status(200);
        res.json(total);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération du total des paiements au mois de " + month + " de l'année " + year});
    }
}

async function priceAbove(req, res){
    try {
        const minPrice = await paymentService.priceAbove(req.params.price);
        res.status(200);
        res.json(minPrice);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des paiements avec un prix supérieur à " + req.params.price});
    }
}

async function priceBelow(req, res){
    try {
        const maxPrice = await paymentService.priceBelow(req.params.price);
        res.status(200);
        res.json(maxPrice);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des paiements avec un prix inférieur à " + req.params.price});
    }
}

async function reservationsStatus(req, res){
    try {
        const reservationsStatus = await paymentService.reservationsStatus(req.params.status);
        res.status(200);
        res.json(reservationsStatus);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des paiments pour les réservations validées"});
    }
}

async function totalPaymentsByStatus(req, res){
    try {
        const status = req.params.status;
        const total = await paymentService.totalPaymentsByStatus(status);
        res.status(200);
        res.json(total);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération du total des paiements pour les réservations " + req.params.status});
    }
}

module.exports = {
    findAllPayments,
    findOnePayment,
    findPaymentsByMethod,
    totalPaymentsByMonth,
    priceAbove,
    priceBelow,
    reservationsStatus,
    totalPaymentsByStatus,
};