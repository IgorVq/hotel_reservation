const connection = require('../config/bdd');

function findAllPayments(){
    return connection.promise().query('select * from payment').then((results) => {
        return results[0];
    });
}

function findOnePayment(id){
    return connection.promise().query('select * from payment where id_payment = ?', [id]).then((results) => {
        return results[0][0];
    });
}

function findPaymentsByMethod(method){
    return connection.promise().query('select * from payment where payment_method like ?', [method]).then((results) => {
        return results[0];
    });
}

function totalPaymentsByMonth(year, month){
    return connection.promise().query('select sum(amount) as total from payment where year(payment_date) = ? and month(payment_date) = ?', [year, month]).then((results) => {
        return results[0][0];
    });
}

function priceAbove(price){
    return connection.promise().query('select * from payment where amount > ?', [price]).then((results) => {
        return results[0];
    });
}

function priceBelow(price){
    return connection.promise().query('select * from payment where amount < ?', [price]).then((results) => {
        return results[0];
    });
}

function reservationsStatus(status){
    return connection.promise().query('select payment.* from payment inner join payer on payer.id_payment = payment.id_payment inner join reservation on reservation.id_reservation = payer.id_reservation where reservation_status like ?', [status]).then((results) => {
        return results[0];
    });
}

function totalPaymentsByStatus(status){
    return connection.promise().query('select sum(amount) as total from payment inner join payer on payer.id_payment = payment.id_payment inner join reservation on reservation.id_reservation = payer.id_reservation where reservation_status like ?', [status]).then((results) => {
        return results[0][0];
    });
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