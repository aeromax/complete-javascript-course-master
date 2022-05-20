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

// const flight = "LH234";

// const max = {
//     name : 'Max Palmer',
//     passport :  '123468465131', 
// }

// const checkIn = function (flightNum, passenger) {
//     flightNum = "LH999";
//     passenger.name = 'Mr. ' + passenger.name;
//     if (passenger.passport === '123468465131') {
//         console.log('Check in');
//     } else {
//         console.log('Wrong passport');
//     }
// }
// checkIn(flight, max);
// console.log(max);

// const newPassport = function(person){
//     person.passport = Math.trunc(Math.random() * 100000000000);
// };

// newPassport(max);

// checkIn(flight, max);   

// const oneWord = function(str) {
//     return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function(str){
//     const [first, ...others]  = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function(str, fn){
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);
//     console.log(`Transformed by: ${fn.name}`);
// };

// transformer('Hooray this works so well!', upperFirstWord);

// const high5 = function(){
//     console.log('👋🏻');
// }

// document.addEventListener('click', high5)

// const greet = function(greeting){
//     return function(name) {
//         console.log(`${greeting} ${name}`);
//     }
// }

// const greeterHey = greet('Hey');

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// greet('Hey')('Max');

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} 
            flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

// lufthansa.book(239, 'Max Palmer');
// lufthansa.book(635, 'John Smith');

// const eurowings = {
//     name: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// };

// const book = lufthansa.book;

// book.call(eurowings, 23, 'Bob Barker')
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper')
// console.log(lufthansa);

// lufthansa.planes = 300;
// lufthansa.buyPlane = function(){
//     console.log(this);
//     this.planes++;
//     console.log(this.planes);
// }

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(100));

// const calcTax = function(vat, value){
//     return value + value * vat;
// };

// console.log(calcTax(.025, 100));

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
// const poll = {
//     question: 'What is your favourite programming language?',
//     options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//     // This generates [0, 0, 0, 0]. More in the next section 😃
//     answers: new Array(4).fill(0),
//     registerNewAnswer() {
//       // Get answer
//       const answer = Number(
//         prompt(
//           `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//         )
//       );
//       console.log(answer);

//       // Register answer
//       typeof answer === 'number' &&
//         answer < this.answers.length &&
//         this.answers[answer]++;

//       this.displayResults();
//       this.displayResults('string');
//     },

//     displayResults(type = 'array') {
//       if (type === 'array') {
//         console.log(this.answers);
//       } else if (type === 'string') {
//         // Poll results are 13, 2, 4, 1
//         console.log(`Poll results are ${this.answers.join(', ')}`);
//       }
//     },
//   };

//   document
//     .querySelector('.poll')
//     .addEventListener('click', poll.registerNewAnswer.bind(poll));

//   poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
//   poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
//   poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// const poll = {
//     question: 'What is your favorite programming language?',
//     options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
//     answers: new Array(4).fill(0),
//     registerNewAnswer() {
//         const answer = Number(
//             prompt(`${this.question}\n${this.options.join('\n')} Write option number:`)
//         );
//         console.log(answer);

//         // Check if answer is a number and within the max allowable answer
//         typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
//         this.displayResults();
//         this.displayResults('string');
//     },
//     displayResults(type = 'array') {
//         if (type === 'array') {
//             console.log(this.answers);
//         } else if (type === 'string') {
//             console.log(`Poll results are ${this.answers.join(', ')}`);
//         }
//     }
// }

// poll.displayResults


// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// immediately invoked functions

// (function () {
//     console.log('This will never run again');
// })();

// const secureBooking = function () {
//     let passengerCount = 0;

//     return function () {
//         passengerCount++;
//         console.log(`${passengerCount} passengers`);
//     };
// };

// const booker = secureBooking();


// booker();
// booker();
// booker();
// coonsole.dir(booker);

// let f;

// const g = function () {
//     const a = 23;
//     f = function () {
//         console.log(a * 2);
//     };
// };

// const h = function () {
//     const b = 777;
//     f = function () {
//         console.log(b * 2);
//     };
// };

// g();
// f();
// h();
// f();

// const boardPassengers = function (n, wait) {
//     const perGroup = n / 3;

//     setTimeout(function () {
//         console.log(`We are now boarding all ${n} passengers.`);
//         console.log(`There are 3 groups, each with ${perGroup} passengers.`);
//     }, wait * 1000);

//     console.log(`Will start boarding in ${wait} second`);
// };

// boardPassengers(180, 3);


(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
        console.log(`Changed to blue`);
    });
})();
