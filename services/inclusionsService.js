const connection = require('../config/bdd');

function findAllInclusions(){
    return connection.promise().query('select * from service_usage').then((results) => {
        return results[0];
    });
}

function findOneInclusion(id){
    return connection.promise().query('select * from service_usage where id_service_usage = ?', [id]).then((results) => {
        return results[0];
    });
}

function findInclusionsByReservation(idReservation){
    return connection.promise().query('select services.* from services inner join service_usage on service_usage.id_service = services.id_service inner join reservation on reservation.id_reservation = service_usage.id_reservation where reservation.id_reservation = ?', [idReservation]).then((results) => {
        return results[0];
    });
}

function findTotalPriceByReservation(idReservation){
    return connection.promise().query('select sum(total_price) from service_usage inner join reservation on reservation.id_reservation = service_usage.id_reservation where reservation.id_reservation = ?', [idReservation]).then((results) => {
        return results[0][0];
    });
}

function findInclusionsByType(type){
    return connection.promise().query('select services.* from services inner join service_usage on service_usage.id_service = services.id_service inner join reservation on reservation.id_reservation = service_usage.id_reservation inner join rooms on rooms.id_room = reservation.id_room where room_type like ?', [type]).then((results) => {
        return results[0];
    });
}

function findReservationsByService(serviceName){
    return connection.promise().query('select reservation.* from reservation inner join service_usage on service_usage.id_reservation = reservation.id_reservation inner join services on services.id_service = service_usage.id_service where service_name like ?', [serviceName]).then((results) => {
        return results[0];
    });
}

function findServicesByReservationTotalCostBelow(price){
    return connection.promise().query('SELECT service_name FROM services INNER JOIN service_usage ON service_usage.id_service=services.id_service INNER JOIN reservation ON reservation.id_reservation = service_usage.id_reservation WHERE total_cost < ?', [price]).then((results) => {
        return results[0];
    });
}

function findServicesByReservationTotalCostAbove(price){
    return connection.promise().query('SELECT service_name FROM services INNER JOIN service_usage ON service_usage.id_service=services.id_service INNER JOIN reservation ON reservation.id_reservation = service_usage.id_reservation WHERE total_cost > ?', [price]).then((results) => {
        return results[0];
    });
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