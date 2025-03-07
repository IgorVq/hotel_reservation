const connection = require('../config/bdd');

function findAllServices(){
    return connection.promise().query('select * from services').then((results) => {
        return results[0];
    });
}

function findOneService(id){
    return connection.promise().query('select * from services where id_service = ?', [id]).then((results) => {
        return results[0];
    });
}

function findServicesPriceAbove(price){
    return connection.promise().query('select * from services where price > ?', [price]).then((results) => {
        return results[0];
    });
}

function findServicesPriceBelow(price){
    return connection.promise().query('select * from services where price < ?', [price]).then((results) => {
        return results[0];
    });
}

function findMostUsedServices(){
    return connection.promise().query('select services.*, count(service_usage.id_service) as uses from services inner join service_usage on service_usage.id_service = services.id_service group by service_usage.id_service order by count(service_usage.id_service) desc').then((results) => {
        return results[0];
    });
}

function findLessExpensiveService(){
    return connection.promise().query('select * from services order by price asc limit 1').then((results) => {
        return results[0];
    });
}

function findMostExpensiveService(){
    return connection.promise().query('select * from services order by price desc limit 1').then((results) => {
        return results[0];
    });
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