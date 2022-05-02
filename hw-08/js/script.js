// Написать функцию, которой передаем, имя, фамилия и возраст,
// и получаем строку "Привет Иван Петров с возрастом 17 лет"

// let userName = prompt("введите свое имя");
// let userLastName = prompt(" введите вашу фамилию");
// let userAge = prompt("введите ваш возраст");

// function user() {
//   let message = `привет, ${userName} ${userLastName} с возрастом ${userAge}`;
//   document.write(message);
// }

// user();

// 2.Напишите функцию, которая принимает параметром число от 1 до 7,
//  а возвращает день недели на русском языке

// let numbers = prompt("введите число");

// function days(numbers) {
//   if (numbers === 1) {
//     return "понедельник";
//   } else if (numbers === 2) {
//     return "это вторник";
//   } else if (numbers === 3) {
//     return "среда";
//   } else if (numbers === 4) {
//     return "четверг";
//   } else if (numbers === 5) {
//     return "пятница";
//   } else if (numbers === 6) {
//     return "суббота";
//   } else if (numbers === 7) {
//     return "воскресенье";
//   } else {
//     return "ошибка";
//   }
// }

// function show(days) {
//   document.write(`это ${numbers}`);
// }

// show(numbers)

// let number = +prompt("введите число: ");

// function showDays(day) {
//   const days = [
//     "Monday",
//     "Tue",
//     "Wenesday",
//     "Thursday",
//     "Friday",
//     "Sunday",
//     "Saturday",
//   ];

//   return document.write(days[day - 1]);
// }

// showDays(number);

// 3.Написать функцию, которой передаем имя, и она возраващает
//  приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)

// let name = prompt("введите имя");
// let time = 4;

// function greeting(userName) {
//   let timeOfDay;

//   if (time > 5 && time <= 10) {
//     timeOfDay = "Доброе утро";
//   } else if (time > 10 && time <= 17) {
//     timeOfDay = "Добрый день";
//   } else if (time > 17 && time <= 22) {
//     timeOfDay = "Добрый вечер";
//   } else {
//     timeOfDay = "Доброй ночи";
//   }

//   return `${timeOfDay} ${userName}`;
// }

// document.write(greeting(name));

// 1. Напишите функцию, которая принимает в качестве параметра целое число и возвращает:

//     -1 если число отрицательное

//     0 если число 0

//     1 если число положительное

// let number = +prompt("введите число");

// function showNumbers() {
//   if (number == 0) {
//     return 0;
//   } else if (number > 0) {
//     return 1;
//   } else if (number < 0) {
//     return -1;
//   }

//   // return `${show} ${number}`;
// }

// document.write(showNumbers());

// 2. Напишите функцию, которая будет принимать в качестве параметров
// строку s, а также ширину окна в символах – w. Возвращать функция долж-
// на новую строку, в которой в начале и в конце добавлено необходимое количество
// знака **`-`**, чтобы первоначальная строка оказалась размещена по цент-
// ру заданного окна а по бокам строки добавлены знаки *.

// Новая строка должна формироваться по следующему принципу:
// - если длина исходной строки s больше или равна ширине заданного
// окна, возвращаем ее в неизменном виде;
// - в противном случае должна быть возвращена строка следующего вида: (функцию передана строка "hi", ширина 20)

// вывод: **`--------hi----------`**

function string(s, w) {
  if (s.length >= w) {
    return s;
  }
  let area = Math.floor((w - s.length) / 2);
  let word = "-".repeat(area) + s + "-".repeat(area);
  return word;
}

document.write(string("мама", 30));
