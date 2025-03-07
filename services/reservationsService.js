const connection = require('../config/bdd');

function findAllReservations(){
    return connection.promise().query('select * from reservation').then((results) => {
        return results[0];
    });
}

function findOneReservations(id){
    return connection.promise().query('select * from reservation where id_reservation = ?', [id]).then((results) => {
        return results[0][0];
    });
}

function findReservationsByStatus(status){
    return connection.promise().query('select * from reservation where reservation_status like ?', [status]).then((results) => {
        return results[0];
    });
}

function findAverageCost(){
    return connection.promise().query('select avg(total_cost) as "average_total_cost" from reservation').then((results) => {
        return results[0][0];
    });
}

function findMinCost(price){
    return connection.promise().query('select * from reservation where total_cost > ?', [price]).then((results) => {
        return results[0];
    });
}

function findMaxCost(price){
    return connection.promise().query('select * from reservation where total_cost < ?', [price]).then((results) => {
        return results[0];
    });
}

function findReservationsByType(type){
    return connection.promise().query('select * from reservation inner join rooms on rooms.id_room = reservation.id_room where rooms.room_type like ?', [type]).then((results) => {
        return results[0];
    });
}

function findReservationsByRoomNumber(roomNumber){
    return connection.promise().query('select * from reservation inner join rooms on rooms.id_room = reservation.id_room where rooms.room_number = ?', [roomNumber]).then((results) => {
        return results[0];
    });
}

function findReservationsByClientId(id){
    return connection.promise().query('select * from reservation where id_client = ?', [id]).then((results) => {
        return results[0];
    });
}

function findClientWithMaxRoomsBooked(){
    return connection.promise().query('SELECT client.*, count(id_reservation) AS "reservation_count" FROM client INNER JOIN reservation ON reservation.id_client = client.id_client GROUP BY client.id_client order by count(id_reservation) desc limit 1').then((results) => {
        return results[0][0];
    });
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