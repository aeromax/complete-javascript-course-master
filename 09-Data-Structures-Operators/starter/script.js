'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));


// const button = document.querySelector('button');

// button.addEventListener('click', function(){
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');

//   for (const [i, row] of rows.entries()){
//     const [first, second] = row.trim().toLowerCase().split('_');
//     const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
//     console.log(`${output.padEnd(20)} ${`✅`.repeat(i + 1)}`);
//   };
  
// });


// const testData = 
// `underscore_case
//  first_name
// Some_Variable 
//   calculate_AGE
// delayed_departure`;

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const rows = flights.split('+');
  for (const [i, r] of rows.entries()) {
    const entry = r.split(';');
    const [first, second, third, fourth] = [entry[0].replaceAll('_',' ').replace('Delayed', '🛑 Delayed'), entry[1].slice('0','3').toUpperCase(), entry[2].slice('0','3').toUpperCase(), entry[3].replace(':','h')];
    const output = `${first} from ${second} to ${third} (${fourth})`
    console.log(output.padStart('50', ' '));
  }

  // 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)