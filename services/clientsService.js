const connection = require('../config/bdd');

function findAllClients(){
    return connection.promise().query('select * from client').then((results) => {
        return results[0];
    });
}

function findClientsByBookingYear(year){
    return connection.promise().query('select client.* from client inner join reservation on reservation.id_client = client.id_client where year(check_in_date) = ? ', [year]).then((results) => {
        return results[0];
    });
}

function findClientsByMinCostBooking(amount){
    return connection.promise().query('select client.* from client inner join reservation on reservation.id_client = client.id_client where total_cost >= ? ', [amount]).then((results) => {
        return results[0];
    });
}

function findClientsByMaxCostBooking(amount){
    return connection.promise().query('select client.* from client inner join reservation on reservation.id_client = client.id_client where total_cost <= ? ', [amount]).then((results) => {
        return results[0];
    });
}

function findClientsByCostBooking(min, max){
    return connection.promise().query('select client.* from client inner join reservation on reservation.id_client = client.id_client where total_cost >= ? and total_cost <= ?', [min, max]).then((results) => {
        return results[0];
    });
}

function findClientsByRegistrationDate(year, month){
    return connection.promise().query('select * from client where year(registration_date) = ? and month(registration_date) = ?', [year, month]).then((results) => {
        return results[0];
    });
}

function findClientsByBookingYearMonth(year, month){
    return connection.promise().query('select client.* from client inner join reservation on reservation.id_client = client.id_client where year(check_in_date) = ? and month(check_in_date) = ?', [year, month]).then((results) => {
        return results[0];
    });
}

function findClientsByBookingType(type){
    return connection.promise().query('select * from client inner join reservation on reservation.id_client = client.id_client inner join rooms on rooms.id_room = reservation.id_room where room_type like ?', [type]).then((results) => {
        return results[0];
    });
}

function findClientByTopCostBooking(){
    return connection.promise().query('select client.*, payment.amount from client inner join reservation on reservation.id_client = client.id_client inner join payer on payer.id_reservation = reservation.id_reservation inner join payment on payment.id_payment = payer.id_payment order by amount desc limit 1').then((results) => {
        return results[0];
    });
}

function findOneClient(id){
    return connection.promise().query('select * from client where id_client = ?', [id]).then((results) => {
        return results[0];
    });
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
    findOneClient,
};