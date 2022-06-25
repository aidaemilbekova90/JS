"use strict";

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//     if (i === 10) {
//       continue;
//     } else {
//       console.log(i);
//     }
//   }
// }

// const users = ["masha", "john", "alex", "tashmat"];
// function showFriend(name) {
//   console.log(name);
// }
// showFriend(users[0]);

//forEach

// const users = ["masha", "john", "alex", "tashmat"];
// users.forEach(showFriends);

// function showFriends(name) {
//   console.log(name);
// }

// const users = ["masha", "john", "alex", "tashmat"];
// users.forEach((elem) => console.log(elem));

//удаление дубликатов из массива
// const arr = [1, 3, 45, 5, 3, 2, 5];
// // let uniqueChars = [...new Set(arr)];
// let uniqueChars = new Set(arr);
// uniqueChars = Array.from(uniqueChars);
// console.log(uniqueChars);

// let uniqueChars = arr.filter((element, index) => {
//   return arr.indexOf(element) === index;
// });
// console.log(uniqueChars);

//напишите функцию, которая из полученного массива чисел возвращает новый массив, состоящий только из четных чисел

// const arr = [1, 5, 8, 3, 4, 9, 12, 56, 78, 44];
// // const arr2 = [];
// const result = arr.filter((number) => {
//   return number % 2 === 0;
// });

// console.log(result);

//напишите функциюБкоторая из переданного обьекта возвращает массивбсоставленный из ключей переданного  объекта
const obj = {
  name: "John",
  age: 45,
  position: "undefined",
};

const arr = [Object.keys(obj)];

console.log(arr);
