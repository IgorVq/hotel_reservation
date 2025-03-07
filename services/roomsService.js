const connection = require('../config/bdd');

function findAllRooms(){
    return connection.promise().query('select * from rooms').then((results) => {
        return results[0];
    });
}

function findOneRoom(id){
    return connection.promise().query('select * from rooms where id_room = ?', [id]).then((results) => {
        return results[0][0];
    });
}

function findAvailableRooms(){
    return connection.promise().query('select * from rooms where status = 1').then((results) => {
        return results[0];
    });
}

function findAverageRoomsCapacity(){
    return connection.promise().query('select avg(capacity) as "Capacité moyenne" from rooms where status = 1').then((results) => {
        return results[0][0];
    });
}

function findRoomsPriceAbove(price){
    return connection.promise().query('select * from rooms where price_per_night >= ?', [price]).then((results) => {
        return results[0];
    });
}

function findRoomsPriceBelow(price){
    return connection.promise().query('select * from rooms where price_per_night <= ?', [price]).then((results) => {
        return results[0];
    });
}

function findRoomsPriceBetween(min, max){
    return connection.promise().query('select * from rooms where price_per_night >= ? and price_per_night <= ?', [min, max]).then((results) => {
        return results[0];
    });
}

function findRoomsByType(type){
    return connection.promise().query('select * from rooms where room_type like ?', [type]).then((results) => {
        return results[0];
    });
}

function findRoomsCapacityAbove(capacity){
    return connection.promise().query('select * from rooms where capacity >= ?', [capacity]).then((results) => {
        return results[0];
    });
}

function findAvailableRoomsByType(type){
    return connection.promise().query('select * from rooms where status = 1 and room_type like ?', [type]).then((results) => {
        return results[0];
    });
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