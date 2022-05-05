'use strict';

// const bookings = [];

// const createBooking = function (flightNum, passengers = 1, price = 199) {
    
//     const booking = {
//         flightNum,
//         passengers,
//         price
//     }
//     console.log(booking);
//     bookings.push[booking];
// }

// createBooking('LH123');

const flight = "LH234";

const max = {
    name : 'Max Palmer',
    passport :  '123468465131', 
}

const checkIn = function (flightNum, passenger) {
    flightNum = "LH999";
    passenger.name = 'Mr. ' + passenger.name;
    if (passenger.passport === '123468465131') {
        console.log('Check in');
    } else {
        console.log('Wrong passport');
    }
}
checkIn(flight, max);
console.log(max);

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(max);

checkIn(flight, max);   