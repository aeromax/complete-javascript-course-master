'use strict';

/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// console.log(arr.splice(2));

// arr.splice(-1);
// console.log(arr);

// console.log(arr.join('-'));

// const arr2 = [23, 44, 45];
// console.log(arr2.at(0));
// console.log(arr2.slice(-1)[0]);
// console.log(arr2.at(-1));



// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// movements.forEach(function (movement, i, movements) {
//   if (movement > 0) {
//     console.log(`${i}: You deposited ${movement} in ${movements}`);
//   } else {
//     console.log(`${i}: You withdrew ${Math.abs(movement)} in ${movements}`);
//   }
// })

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${key}: ${value}`);
// })

// const data1 = new Map([
//   ['julia', [3, 5, 2, 12, 7]],
//   ['kate', [9, 16, 6, 8, 3]]
// ]);

// const data2 = new Map([
//   ['julia', [9, 16, 6, 8, 3]],
//   ['kate', [10, 5, 6, 1, 4]]
// ])

// const listDogs = function (owner, age, index) {
//   console.log(`${owner} owns ${age.length} dogs:`);
//   age.forEach(function (age, index) {
//     if (age <= 3) {
//       console.log(`Dog ${index + 1} is ${age} years old and is still a puppy.`);
//     } else {
//       if (age > 3) {
//         console.log(`Dog ${index + 1} is ${age} years old and is an adult.`);
//       }
//     }
//   })
// };

// const checkAges = function (data) {
//   data.forEach((values, key) => {
//     let owner = key;
//     let dogs = values;
//     if (owner === 'julia') {
//       listDogs(owner, dogs.slice(1, -2));
//     } else {
//       listDogs(owner, dogs);
//     }
//   });
// };

// checkAges(data1, data2);

// const data1 = new Map([
//   ['julia', [3, 5, 2, 12, 7]],
//   ['kate', [9, 16, 6, 8, 3]]
// ]);

// const data2 = new Map([
//   ['julia', [9, 16, 6, 8, 3]],
//   ['kate', [10, 5, 6, 1, 4]]
// ])



// const checkAges = function (data) {
//   data.forEach((values, key) => {
//     const owner = key;
//     const dogs = values;

//     const humanYears = dogs.map(function (dog) {
//       if (dog < 2) {
//         return dog * 2;
//       } else {
//         return dog * 4;
//       }
//     });

//     const adultDogs = humanYears.filter(function (dog) {
//       return dog > 18;
//     });

//     const totalHumanYears = adultDogs.reduce(function (acc, dog) {
//       return acc + dog;
//     });
//     console.log(`${owner} has ${adultDogs.length} dogs that are adults in human years: ${adultDogs}`);
//     console.log(`${owner}'s dogs have a cumulative human age of ${totalHumanYears}`);
//   });
// };

// checkAges(data1, data2);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

// const movementsUsd = movements.map(mov => {
//   return mov * euroToUsd;
// });

// console.log(movements);
// console.log(movementsUsd);

// const deposits = movements.filter(function (m) {
//   return m > 0;
// });

// const withdrawals = movements.filter(function (w) {
//   return w < 0;
// });
// console.log(deposits);
// console.log(withdrawals);

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   return acc + cur;
// }, 0);

// const balance = movements.reduce((acc, cur) => acc + cur, 0);

// console.log(balance);


// const maxBal = movements.reduce((acc, cur) => {
//   if (acc > cur) {
//     return acc;
//   } else {
//     return cur;
//   }
// }, movements[0]);

// console.log(maxBal);

// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov) => return mov * euroToUsd;)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);