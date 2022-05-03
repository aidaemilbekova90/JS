//DRY -dont repaet yourself

// function sayHello() {
//   document.write("Hello,Welcome to my website");
// }
// sayHello();

// function sayHello(greeting) {
//   document.write(greeting);
// }
// sayHello(greeting); // undefined
// sayHello("ghbdtn");
// sayHello("hello");

// function sayHello(greeting = "Привет") {
//   document.write(greeting);
// }
// sayHello(); //привет
// sayHello("Hello"); // hello
// sayHello(); //привет

//функции,которые возвращают
// function calculateSum(num1, num2) {
//   document.write(`${num1}+${num2}=${num1 + num2} <br>`);
// }
// calculateSum(20, 30);
// calculateSum(20, 20);

// function calculateSum(num1, num2) {
//   if (num1 && num2) {
//     document.write(`${num1}+${num2}=${num1 + num2} <br>`);
//   } else {
//     document.write(
//       "Функция вызвана без аргументов или отсутствует один из аргументов"
//     );
//   }
// }

// calculateSum(20, 30);
// calculateSum(20); // фукц в б арг

// function calculateSum(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }
// document.write(calculateSum(20, 30));
// document.write(calculateSum(20, 35));

// function calculateSum(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }
// function ShowSum(sum) {
//   document.write(`Сумма двух чисел равна :${sum}`);
// }

// ShowSum(calculateSum(50, 50));

// let sum = calculateSum(4, 50);
// ShowSum(sum);

// function calculateSum(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }
// function ShowSum(sum) {
//   document.write(`Сумма двух чисел равна :${sum}`);
// }
// let a = 5;
// let b = 7;
// let sum = calculateSum(a, b);
// ShowSum(sum);

/*-------function expression------*/

// let sum = function (num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// };

// function ShowSum(sum) {
//   document.write(`Сумма двух чисел равна :${sum}`);
// }

// ShowSum(sum(20, 40));

/*------стреллочные функции -----*/

// let calculateSum = (num1, num2) => {
//   return num1 + num2;
// };

// function ShowSum(sum) {
//   document.write(`Сумма двух чисел равна :${sum}`);
// }
// ShowSum(calculateSum(50, 90));

// let calculateSum = (num1, num2) => num1 + num2;
// let sum = calculateSum(50, 90);
// function ShowSum(sum) {
//   document.write(`Сумма двух чисел равна :${sum}`);
// }
// ShowSum(sum);

// let calculateSum = (num1, num2) => {
//   let sum = num1 + num2;
//   return sum;
// };

// let sum = calculateSum(40, 50);
// function ShowSum(sum) {
//   document.write(`Сумма двух чисел равна :${sum}`);
// }

// ShowSum(sum);

/*------рекурсий */

// let potatoes = 50;
// function peelPotatoes(potatoes) {
//   if (potatoes >= 0) {
//     document.write(`Осталось  ${potatoes} <br>`);
//     potatoes--;
//     peelPotatoes(potatoes);
//   }
// }
// peelPotatoes(potatoes);

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
//   const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

//   return days[day - 1];
// }

// document.write(showDays(number));

// let userName = "Вася";
// function showMessage() {
//   userName = "Петя"; // (1) изменяем значение внешней переменной
//   let message = "Привет, " + userName;
//   alert(message);
// }
// alert(userName); // Вася перед вызовом функции
// showMessage();
// alert(userName); // Петя, значение внешней переменной было изменено функцией

// function checkAge(age) {
//   age > 18 || confirm`родители разрешили`;
// }

// document.write(checkAge());

// checkAge(age);

// **Напишите функцию pow(x,n) , которая возвращает x в степени n . Иначе говоря,
// умножает x на себя n раз и возвращает результат.
// Создайте страницу, которая запрашивает x и n , а затем выводит результат pow(x,n) .
// P.S. В этой задаче функция обязана поддерживать только натуральные значения n , т.е.
// целые от 1 и выше.

// let number = +prompt("введите число");
function pow(x, n) {
  if (n > 1) {
    return Math.pow();
  }
}

function show(pow) {
  document.write(show());
}
show(7, 3);
