// const numbers = [1, 5, 7, 10, 20, 25, 29, 31, 34, 36, 41, 50]
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];
//     console.log(number);

//     if (number % 2 === 0) {
//         console.log('Четное!!!!')

//         total += number;
//     }
// }

// for (const number of numbers) {
//     console.log(number);
//     if (number % 2 === 0) {
//         console.log(`${number} - Четное!!!!`);
//         total += number;
//     }
// }
// console.log(`Total:`, total);

// !=============================
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'aj4xth3m4n';

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];
//     console.log(login);
// }

// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден.`
//   : `Пользователь ${loginToFind} не найден.`;

// console.log(message);

// !=============================
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// console.log('smallestNumber: ', smallestNumber);

// !=============================
// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//     console.log(letter);

//     const isEqual = letter === letter.toLowerCase();

//   invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }

// console.log('invertedString: ', invertedString);

// ?==============================
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   let message;

//   if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }

//   return message;
//   // Change code above this line
// }

// console.log();

// !===============================

// function findLongestWord(string) {
//   // Change code below this line

//   const arrayWords = string.split(' ');

//   let longestWords = arrayWords[0];

//   for (let i = 0; i < arrayWords.length; i += 1) {
//     if (arrayWords[i].length > longestWords.length) {
//             longestWords = arrayWords[i];
//         }
//     }
//     return longestWords;

// }

// console.log(findLongestWord("Google do a roll"))

// !=================================
// function filterArray(numbers, value) {
//    // Change code below this line
//   let newArray = [];
// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {newArray.push(numbers[i])};
//   }
//   return newArray;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([1, 2, 3, 4, 5], 2));
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// !=================================
// function includes(array, value) {
//   // Change code below this line

// //  for (let i = 0; i < array.length; i += 1) {
// //      if (array[i] === value) {
// //        return true;

//   for (let arrays of array) {
//       if (arrays === value) {
//         return true;
//       }
//     }
//   return false;

//   // Change code above this line
// }

//  console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
//  console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
//  console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Sun"));
//  console.log(includes([1, 2, 3, 4], 5));
//  console.log(includes([1, 2, 3, 4], 2));

//
// !=================================
// function* generator(a, b, c) {
//   for (let i = 0; i < 5; i++) {
//     yield i;
//   }
// }

// let result = 0;
// for (const value of generator()) {
//   result += value;
// }

// !=================================
// const obj = { 1: 'a', 2: 'b', 3: 'c' };
// const set = new Set([1, 2, 3, 4, 5]);

// obj.hasOwnProperty('1');
// obj.hasOwnProperty(1);
// set.has('1');
// set.has(1);

// !=================================
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = Object.values(apartment);

// for (const value of values) {
//   console.log(value);
// }
// // Change code below this line

// const keys = Object.keys(apartment);

// ! =================================
// const fn = (a, b, c) => console.log();

// !==================================
//? console.log('==== Example 3 ====');
// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//   }

//   return 'stone not found';
// }

// // positive test
// console.log(calcTotalPrice(stones, 'Щебень')); // 400
// console.log(calcTotalPrice(stones, 'Сапфир')); // 2800

// //  negative test
// console.log(calcTotalPrice(stones, 'wertyui')); // stone not found

// // !====================================
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//       // * product.quantity;
//     }
//   }
//   return null;
// }

// console.log(getProductPrice('Scanner'));
// console.log(getProductPrice('Engine'));

// !======================================
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };
// user.mood = 'happy'; // добавляет поле mood со значением 'happy'
// user.hobby = 'skydiving'; // заменяет значение hobby на 'skydiving'

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}:${user[key]}`);
// }

// console.log(Object.keys(user));
// console.log(Object.values(user));

// !====================================
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const values = Object.values(product);

//   for (const product of products) {
//     {
//       if (product.name === propName) {
//         return product.name;
//       }
//     }

//   }
// }

// *================================
// let a = new Array(1, 2),
//   b = new Array(3);
// alert(a[0] + b[0]);

//

// ?==================================
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

// ?==================== practicum with mentor
// const student = {
//   html: 100,
//   css: 80,
//   js: 10,
// };

// let responce = prompt('Skill');
// console.log(typeof responce);
// console.log(student[responce]);

// * =======================
// const student = ['Vadim', 'Svetlana', 'Olesya', 'Ruslan'];
// for (let i = 0; i <= student.length; i += 1) {
//   console.log(student.length);
//   console.log(student[i]);
// }
// const name = student.indexOf('Artem');
// console.log(name);

// *=================================
// const cart = {
//   items: [
//     { name: 'Watermelon', price: 60, qty: 5 },
//     { name: 'Orange', price: 90, qty: 10 },
//   ],
//   getItems() {
//     return this.items;
//   },
//   addProduct(product) {
//     for (let item of this.items) {
//       // console.log(item);
//       if (item.name === product.name) {
//         let message = prompt('Do you want to add some more goods? ');

//         if (message === null) {
//           return;
//         } else {
//           this.increaseQuantity;
//         }
//       } else {
//         this.items.push(product);
//         return;
//       }
//     }
//   },
//   removeProduct(productName) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       if (this.items[i].name === productName) {
//         this.items.splice(i, 1);
//         return;
//       }
//     }
//   },
//   clearList() {
//     this.items = [];
//   },
//   totalPrice() {
//     let totalAllPrice = 0;
//     for (let item of this.items) {
//       let priceProduct = item.price * item.qty;
//       //   console.log(priceProduct);
//       totalAllPrice += priceProduct;
//     }
//     return totalAllPrice;
//   },
//   increaseQuantity() {},
//   decreaseQuantity() {},
// };
// console.log('Total:', cart.totalPrice());

// !===================================================
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
// Change code below this line
// getPotions() {
//   return this.potions;
// },
// addPotion(newPotion) {
//   for (const potion of this.potions)
//     if (potion.name === newPotion.name) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }

//   this.potions.push(newPotion);
// },
// removePotion(potionName) {
//   const { potions } = this;
//   for (const potion of potions) {
//     if (potion.name === potionName) {
//       potions.splice(potions.indexOf(potion), 1);
//       return potion;
//     }
//   }
//   return `Potion ${potionName} is not in inventory!`;
// },
// updatePotionName(oldName, newName) {
//   const { potions } = this;
//   for (const potion of potions) {
//     if (potion.name === oldName) {
//       return (potion.name = newName);
//     }
//   }
//   return `Potion ${oldName} is not in inventory!`;
// },

// Change code above this line
// };

// ?===========================================
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions)
//       if (potion.name === newPotion.name) {
//         return 'Error! Potion ${newPotion.name} is already in your inventory!';
//       }
//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     const { potions } = this;
//     for (const potion of potions) {
//       if (potion.name === potionName) {
//         potions.splice(potions.indexOf(potion), 1);
//         return potions;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     const { potions } = this;
//     for (const potion of potions) {
//       if (potion.name === oldName) {
//         return (potion.name = newName);
//       }
//     }
//     return 'Potion ${oldName} is not in inventory!';
//   },
//   // Change code above this line
// };

// !====================================================================== модуль 4 Дз 4
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],

//   // ? Через forEach
//   order(pizzaName, onSuccess, onError) {
//     let messege = onError(
//       `There is no pizza with a name ${pizzaName} in the assortment.`,
//     );
//     this.pizzas.forEach(pizza => {
//       if (pizza == pizzaName) {
//         messege = onSuccess(pizzaName);
//       }
//     });
//     return messege;
//   },
// };

// // ? Через for...of
// //  order(pizzaName, onSuccess, onError) {
// //     let messege = onError(
// //       `There is no pizza with a name ${pizzaName} in the assortment.`,
// //     );
// //     for (const pizza of this.pizzas) {
// //       if (pizza == pizzaName) {
// //         messege = onSuccess(pizzaName);
// //       }
// //     }
// //     return messege;
// //   },
// // };

// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// !====================================================================== модуль 4 Дз 5
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   //* через forEach
//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });

// //* через for
//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }

//   // Change code above this line
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([10, 40, 50]));

// !====================================================================== модуль 4 Дз 6 forEach
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   //* через forEach
//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
// //* через for
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([10, 20, 25, 27, 29], 25));

// !====================================================================== модуль 4 Дз 7
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
//   //* через forEach
//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   // * через for
//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   return commonElements;
//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 19, 5], [1, 17, 19]));

// !====================================================================== модуль 4 Дз 8 Стрелочные функции
// // Change code below this line
// * Обычная
// // function calculateTotalPrice(quantity, pricePerItem) {
// * Стрелочная функция
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//   return quantity * pricePerItem;
// };
// console.log(calculateTotalPrice(5, 100));
// !====================================================================== модуль 4 Дз 9 Неявный возврат (implicit return)
// // * Неявный возврат (implicit return)
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// // * Явный возврат (explicit return)
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(5, 200));
// console.log(calculateTotalPrice(0, 100));

// !====================================================================== модуль 4 Дз 10 Стрелочные функции как коллбеки
//* Стрелочные функции как коллбеки
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });
//   return totalPrice;
// };

// *через forEach
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([164, 48, 291])); //// возвращает 503

// !====================================================================== модуль 4 Дз 11
//* Стрелочные функции как коллбеки
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];
//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers;
// };
// *через forEach
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 4)); //возвращает [5]
// console.log(filterArray([1, 2, 3, 4, 5], 6)); //возвращает []
// console.log(filterArray([10, 20, 30, 40, 50], 25)); //возвращает [30. 40, 50]

// !====================================================================== модуль 4 Дз 12
//* Стрелочные функции как коллбеки
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];
//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   return commonElements;
// };

// *через forEach
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); //возвращает [2]
// console.log(getCommonElements([10, 22, 23, 15], [16, 22])); //возвращает [22]

// !====================================================================== модуль 4 Дз 13 Чистые функции
// function changeEven(numbers, value) {
//   let total = [];
//   numbers.forEach(number => {
//     number % 2 === 0 ? total.push(number + value) : total.push(number);
//   });
//   return total;
// }

// console.log(changeEven([17, 24, 68, 31, 42], 100));

// function changeEven(numbers, value) {
//   // Change code below this line
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
//   return total;
//   // Change code above this line
// }
// console.log(changeEven([17, 24, 68, 31, 42], 100));

// !====================================================================== модуль 4 Дз 14 Метод map()
const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

// Change code below this line

const planetsLengths = planets.map(function (number) {
  console.log(number);
  return number.length;
});
console.log(planetsLengths);