/* -----1-----*/
// Имеется массив из 20 чисел. Вывести на экран только четные числа из массива

// let numbers = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
// for (i = 0; i < numbers.length; i++) {
//   if (i % 2 === 0) {
//     document.write(`<h3>${numbers[i]}</h3>`);
//   }
// }

/*-------2------*/
// Имеется массив строк с 10 элементами. Вывести на экран самое длинное слово из массива

// let strings = [
//   "John",
//   "mother",
//   "people",
//   "motherland",
//   "children",
//   "soldier",
//   "kindergarten",
// ];
// let largestStr = "";

// for (let item of strings) {
//   if (item.length > largestStr.length) {
//     largestStr = item;
//   }
// }

// console.log(largestStr);

// let strings = [
//   "John",
//   "mother",
//   "people",
//   "motherland",
//   "children",
//   "soldier",
//   "kindergarten",
//   "Kyrgyz Republic",
// ];

// let largestStr = "";

// for (let i = 0; i < strings.length; i++) {
//   if (strings[i].length > largestStr.length) {
//     largestStr = strings[i];
//   }
// }

// console.log(largestStr);

/*-----3-----*/
//  Массовое удаление. Имеется массив, который содержит имена 15 пользователей. Необходимо удалить всех пользователей. При удалении каждого пользователя нужно выводить сообщения:

//     «Удаляю пользователя Иван»

//     «Удаляю пользователя Вася»

// let users = ["alex", "john", "Vern", "Oleg", "Ann", "Dima", "George", "Lucas"];
// for (let i = 0; i < users.length; i++) {
//   document.write(`Удаляю пользователя ${users[i]}<br>`);
// }

/*------Самостоятельная работа----*/

// Строка называется палиндромом, если она пишется одинаково в обоих
// направлениях. Например, палиндромами в английском языке являются
// слова «anna», «civic», «level», «hannah». Напишите программу, запраши-
// вающую у пользователя строку и при помощи цикла определяющую, яв-
// ляется ли она палиндромом.

// Вывести таблицу умножения от 0 до 10

// let i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let a = 1; a <= 10; a++) {
//   for (i = 0; i <= 10; i++) {
//     document.write(`${i}*${a}=${a * i}<br>`);
//   }
//   document.write("<br>");
// }
