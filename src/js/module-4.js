// !===================================== модуль 4 Дз 4
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

// !===================================== модуль 4 Дз 5
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

// !===================================== модуль 4 Дз 6 forEach
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

// !===================================== модуль 4 Дз 7
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

// !===================================== модуль 4 Дз 8 Стрелочные функции
// // Change code below this line
// * Обычная
// // function calculateTotalPrice(quantity, pricePerItem) {
// * Стрелочная функция
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//   return quantity * pricePerItem;
// };
// console.log(calculateTotalPrice(5, 100));
// !===================================== модуль 4 Дз 9 Неявный возврат (implicit return)
// // * Неявный возврат (implicit return)
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// // * Явный возврат (explicit return)
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(5, 200));
// console.log(calculateTotalPrice(0, 100));

// !===================================== модуль 4 Дз 10 Стрелочные функции как коллбеки
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

// !===================================== модуль 4 Дз 11
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

//! ===================================== модуль 4 Дз 12
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

// !===================================== модуль 4 Дз 13 Чистые функции
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

// !===================================== модуль 4 Дз 14 Метод map()
// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

// // Change code below this line

// const planetsLengths = planets.map(function (number) {
//   console.log(number);
//   return number.length;
// });
// console.log(planetsLengths);

// !===================================== модуль 4 Дз 15 Метод map() и массив объектов
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => {
//   // console.log(book);
//   return book.title;
// });
// console.log(titles);

//!===================================== модуль 4 Дз 16 Метод flatMap()
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism'],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => {
//   console.log(book);
//   return book.genres;
// });
// console.log(genres);

//!===================================== модуль 4 Дз 17 Задача. Имена пользователей
// // *создать новый масив и распылить в него то что приходит тебе типа с бекенда тоесть масив юзер...
// // *потом с помощью метода (map) найти нужное свойство...

// const getUserNames = users => {
//   const newUsers = [...users];
//   const getNewUsersNames = newUsers.map(user => user.name);
//   return getNewUsersNames;
// };
// console.log(getUserNames);

// const getUserNames = users => {
//   const names = users.map(user => user.name);
//   return names;
//};

//!===================================== модуль 4 Дз 18 Задача. Почты пользователей
// const getUserEmails = users => {
//   const newUsersEmails = [...users];
//   const getnewUsersEmails = newUsersEmails.map(user => user.email);
//   return getnewUsersEmails;
// };

//!===================================== модуль 4 Дз 19 Методы filter и find
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => {
//   // console.log(number);
//   return number % 2 === 0;
// });
// const oddNumbers = numbers.filter(number => {
//   return number % 2;
// });
// console.log(evenNumbers);
// console.log(oddNumbers);

//!===================================== модуль 4 Дз 20 Фильтрация уникальных элементов
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => {
//   // console.log(book);
//   return book.genres;
// });

// const uniqueGenres = allGenres.filter(
//   (genres, index, array) => array.indexOf(genres) === index,
// );

// console.log(allGenres);
// console.log(uniqueGenres);

//!===================================== модуль 4 Дз 21 Метод filter() и массив объектов
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating > MIN_RATING);
// const booksByAuthor = books.filter(book => book.author == AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);

// Change code below this line

//!===================================== модуль 4 Дз 22

// const getUsersWithEyeColor = (users, color) => {
//   const user = users.filter(eye => eye.eyeColor === color);
//   return user;
// };

//!===================================== модуль 4 Дз 23
// // * Вариант 1
// const getUsersWithAge = (users, minAge, maxAge) => {
//   const user = users.filter(user => user.age >= minAge && user.age <= maxAge);
//   return user;
// };
// //  * Вариант 2
// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(user => user.age >= minAge && user.age <= maxAge);
// };

//!===================================== модуль 4 Дз 24
// const getUsersWithFriend = (users, friendName) =>
//   users.filter(user => user.friends.includes(friendName));

//!===================================== модуль 4 Дз 25
// const getFriends = users => {
//   const user = users.flatMap(userFriends => userFriends.friends);
//   const uniqueFriends = user.filter(
//     (friend, index, array) => array.indexOf(friend) === index,
//   );
//   return uniqueFriends;
// };
// console.log(getFriends);

//!===================================== модуль 4 Дз 26
// const getActiveUsers = users => {
//   const userStatus = users.filter(status => status.isActive === true);
//   return userStatus;
// };

//!===================================== модуль 4 Дз 27
// const getInactiveUsers = users => {
//   const userStatus = users.filter(status => status.isActive === false);
//   return userStatus;
// };

//!===================================== модуль 4 Дз 28 Метод find()
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// console.log(bookWithTitle);
// console.log(bookByAuthor);

//!===================================== модуль 4 Дз 29  find()
// const getUserWithEmail = (users, email) => {
//   const allUsersEmail = users.find(mail => mail.email === email);
//   return allUsersEmail;
//   //return users.find(mail => mail.email === email);
// };

//!===================================== модуль 4 Дз 30 Метод every()
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(number => {
//   return number % 2 === 0;
// });
// const eachElementInFirstIsOdd = firstArray.every(number => {
//   return number % 2;
// });

// const eachElementInSecondIsEven = secondArray.every(number => {
//   return number % 2 === 0;
// });
// const eachElementInSecondIsOdd = secondArray.every(number => {
//   return number % 2;
// });

// const eachElementInThirdIsEven = thirdArray.every(number => {
//   return number % 2 === 0;
// });
// const eachElementInThirdIsOdd = thirdArray.every(number => {
//   return number % 2;
// });
// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);
// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);
// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);

//!===================================== модуль 4 Дз 31
// const isEveryUserActive = users => {
//   const allUsersActive = users.every(user => user.isActive);
//   return allUsersActive;
// };

//!===================================== модуль 4 Дз 32 Метод some()
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(num => {
//   return num % 2 === 0;
// });
// const anyElementInFirstIsOdd = firstArray.some(num => {
//   return num % 2;
// });

// const anyElementInSecondIsEven = secondArray.some(num => {
//   return num % 2 === 0;
// });
// const anyElementInSecondIsOdd = secondArray.some(num => {
//   return num % 2;
// });

// const anyElementInThirdIsEven = thirdArray.some(num => {
//   return num % 2 === 0;
// });
// const anyElementInThirdIsOdd = thirdArray.some(num => {
//   return num % 2;
// });

// console.log(anyElementInFirstIsEven);
// console.log(anyElementInFirstIsOdd);
// console.log(anyElementInSecondIsEven);
// console.log(anyElementInSecondIsOdd);
// console.log(anyElementInThirdIsEven);
// console.log(anyElementInThirdIsOdd);
//!===================================== модуль 4 Дз 33
// const isAnyUserActive = users => {
//   return users.some(user => user.isActive);
//   //  const userActive = users.some(user => user.isActive)
//   //  return userActive
// };

//!===================================== модуль 4 Дз 34 Метод reduce()
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((acc, player) => acc + player);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(totalPlayTime);
// console.log(averagePlayTime);

//!===================================== модуль 4 Дз 35 Метод reduce() и массив объектов
// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce(
//   (time, game) => time + game.playtime / game.gamesPlayed,
//   0,
// );
// console.log(totalAveragePlaytimePerGame);

//!===================================== модуль 4 Дз 36 Задача. Общий баланс пользователей
// const calculateTotalBalance = users => {
//   const totalBalance = users.reduce((acc, { balance }) => acc + balance, 0);
//   return totalBalance;
// };
//!===================================== модуль 4 Дз 37 Задача. Общее количество друзей
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];
// const getTotalFriendCount = users => {
//   const totalFriends = users.reduce(
//     (acc, { friends }) => acc + friends.length,
//     0,
//   );
//   return totalFriends;
// };
// console.log(getTotalFriendCount);

//!===================================== модуль 4 Дз 38 Метод sort()
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();
// console.log(ascendingReleaseDates);

// const alphabeticalAuthors = [...authors].sort();
// console.log(alphabeticalAuthors);

//!===================================== модуль 4 Дз 39 Свой порядок сортировки чисел
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const descendingReleaseDates = [...ascendingReleaseDates].sort((a, b) => b - a);

// console.log(releaseDates);
// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

//!===================================== модуль 4 Дз 40 Свой порядок сортировки строк
// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
//   'Howard Lovecraft',
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// console.log(authors);
// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);

//!===================================== модуль 4 Дз 41 Сортировка объектов
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor) =>
//   firstAuthor.author.localeCompare(secondAuthor.author),
// );

// const sortedByReversedAuthorName = [...books].sort(
//   (firstAuthor, secondAuthor) =>
//     secondAuthor.author.localeCompare(firstAuthor.author),
// );

// const sortedByAscendingRating = [...books].sort(
//   (firstRating, secondRating) => firstRating.rating - secondRating.rating,
// );

// const sortedByDescentingRating = [...books].sort(
//   (firstRating, secondRating) => secondRating.rating - firstRating.rating,
// );

// console.log(sortedByAuthorName);
// console.log(sortedByAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

//!===================================== модуль 4 Дз 42
// const sortByAscendingBalance = users => {
//   return [...users].sort(
//     (firstBalance, secondBalance) =>
//       firstBalance.balance - secondBalance.balance,
//   );
// };

//!===================================== модуль 4 Дз 43
// const sortByDescendingFriendCount = users => {
//   return [...users].sort(
//     (firstFriendCount, secondFriendCount) =>
//       secondFriendCount.friends.length - firstFriendCount.friends.length,
//   );
// };

//!===================================== модуль 4 Дз 44
// const sortByName = users => {
//   return [...users].sort((firstName, secondName) =>
//     firstName.name.localeCompare(secondName.name),
//   );
// };

//!===================================== модуль 4 Дз 45 Цепочки методов (чейнинг, chaining)
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//   .filter(book => book.rating >= MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((firstRating, secondRating) => firstRating.localeCompare(secondRating));

// console.log(names);

//!===================================== модуль 4 Дз 46
// const getNamesSortedByFriendCount = users => {
//   return (sortedByFriendCount = [...users]
//     .sort(
//       (smallerFriends, moreFriends) =>
//         smallerFriends.friends.length - moreFriends.friends.length,
//     )
//     .map(user => user.name));
// };

//!===================================== модуль 4 Дз 47
// const getSortedFriends = users => {
//   return [...users]
//     .flatMap(user => {
//       return user.friends;
//     })
//     .sort()
//     .filter((friends, index, array) => array.indexOf(friends) === index);
// };

//!===================================== модуль 4 Дз 48
// const getTotalBalanceByGender = (users, gender) =>
//   [...users]
//     .filter(user => user.gender === gender)
//     .reduce((total, user) => {
//       return total + user.balance;
//     }, 0);
