// let lang = "de";
// switch (lang) {
//   case "ky":
//     console.log("Салам!");
//     break;
//   case "ru":
//     console.log("Привет!");
//     break;
//   case "en":
//     console.log("Hello");
//     break;
//   default:
//     console.log("я не знаю такого языка");
//     break;
// }
/*&& (и) */
// let highIncome = true;
// let goodCreditHistory = true;
// if (highIncome === true && goodCreditHistory) {
//   console.log("Мы готовы дать вам кредит");
// } else {
//   console.log("Извинитеб мы пока не выдаем кредитов");
// }

/*|| (или) */

// let highIncome = false;
// let goodCreditHistory = true;
// if (highIncome === true || goodCreditHistory) {
//   console.log("Мы готовы дать вам кредит");
// } else {
//   console.log("Извинитеб мы пока не выдаем кредитов");
// }

/*!(не)*/

// let eligibleforloan = false;
// console.log(!eligibleforloan); //true

// console.log(false || true);

// let userColor = "red";
// let defaultColor = "blue";
// let productColor = userColor || defaultColor;
// console.log(productColor);
/* сложение сприсвоением */
// let a = 2;
// let b = 3;
// a += b;
// console.log(a); //5

/*вычитание с присвоением */
// let a = 10;
// let b = 3;
// a -= b;
// console.log(a);   //7

// let a = 10;
// let b = 3;
// a %= b;
// console.log(a);

/*Массивы- Array */
// let users = ["John", 1, "Hello", false, true, [1, 20, 3]];
// console.log(users.length);   //6

// console.log(users[1]); //1

// let users = ["John", "Mary", "Иван"];
// users[1] = "Вася";
// console.log(users); //  (3) ['John', 'Вася', 'Иван']

/*метод unshift */
//let users = ["John", "Mary", "Иван"];

// users.unshift("Pete");
// console.log(users);    // ['Pete', 'John', 'Mary', 'Иван']

/* метод push*/
// let users = ["John", "Mary", "Иван"];
// users.push("Pete");
// console.log(users);    //['John', 'Mary', 'Иван', 'Pete']

/* метод pop*/
// let users = ["John", "Mary", "Иван"];
// users.pop();
// console.log(users);  //['John', 'Mary']

/*метод shift  */

// let users = ["John", "Mary", "Иван"];
// users.shift();
// console.log(users); //['Mary', 'Иван']

/*метод toString() */
// let users = ["John", "Mary", "Иван"];
// console.log(users.toString());   //John,Mary,Иван

/*метод join */
// let users = ["John", "Mary", "Иван"];
// console.log(users.join());  //John,Mary,Иван

/*метод reverse */
// let users = ["John", "Mary", "Иван"];
// console.log(users.reverse()); //  ['Иван', 'Mary', 'John']

/*метод concat */
// let users = ["John", "Mary", "Иван"];
// console.log(users.concat("aida")); // ['John', 'Mary', 'Иван', 'aida']

/*метод includes */
// let users = ["John", "Mary", "Иван"];
// console.log(users.includes("Вова")); //false

/*1. Разработайте программу, запрашивающую у пользователя букву латинского алфавита.
 Если введенная буква входит в следующий список (a, e, i, o или u), необходимо вывести
  сообщение о том, что эта буква гласная. Если была введена буква **y**, программа должна написать,
   что эта буква может быть как гласной, так и согласной. Во всех других случаях должно выводиться
    сообщение о том, что введена согласная буква.  */

// let letter = prompt("введите букву латинского алфавита");
// letter = letter.toUpperCase();
// //  let vowels= ["A", "E","I","O","U"];

// //  let consonants=["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z" ];
// //  let y=[vowels || consonants];

// switch (letter) {
//   case "A":
//   case "E":
//   case "I":
//   case "O":
//   case "U":
//     alert("гласная буква");
//     break;
//   case "Y":
//     alert("может быть гласной и согласной");
//     break;
//   default:
//     alert("согласная буква");
//     break;
// }

/*2. Напишите программу, запрашивающую у пользователя три целых числа и выводящую их в упорядоченном
 виде – по возрастанию.  */
let n = +prompt("введите первое целое число");
let n2 = +prompt("введите второе целое число");
let n3 = +prompt("введите третье целое число");

if (n < n2 && n2 < n3) {
  alert(`${n} ${n2} ${n3}`);
} else if (n < n3 && n3 < n2) {
  alert(`${n} ${n3} ${n2}`);
} else if (n2 < n && n3 < n3) {
  alert(`${n2} ${n} ${n3}`);
} else if (n2 < n3 && n3 < n) {
  alert(`${n2} ${n3} ${n}`);
} else if (n3 < n && n < n2) {
  alert(`${n3} ${n} ${n2}`);
} else if (n3 < n2 && n2 < n) {
  alert(`${n3} ${n2} ${n}`);
}
