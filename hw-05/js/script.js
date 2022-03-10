/*
В переменную lang нужно получить данные от пользователя если пользователь введет “ru” нужно 
приветствовать его на русском если “ky” на кыргызском если будет другое значение нужно вывести 
сообщение “Я не знаю такого языка”*/

// let lang=prompt("введите слово ru или ky");
// if(lang==="ru"){
//     alert("Привет");
//     console.log(`Привет,${lang}!`);
// }else if(lang==="ky"){
//     alert("Салам");
// console.log(`Салам,${lang}!`);
// } else{
//  console.log("Я не знаю такого языка");
//  alert("Я не знаю такого языка");
// };

/*Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой 
строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.*/

// let string="abcde";

// if (string.charAt("0")=== "a"){
//     console.log("да");
// } else{
//     console.log("нет");
//}

// string==="a" ? console.log("да"):console.log("нет");

// let string="abcde";
// if (string[0]==="a"){
//     console.log("да");
// } else{
//    console.log("нет");
// };

/*Дано число с цифрами, например, 12345. Проверьте, что первая цифра числа 
1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.  */
// let number=12345;
// if( number===123){
//     console.log("да");
// }else{
//     console.log("нет");
// }

// let numbers = prompt("введите числа");
// let number = +numbers[0];

// if (number === 1) {
//   alert("да");
// } else if (number === 2) {
//   alert("да");
// } else if (number === 3) {
//   alert("да");
// } else {
//   alert("нет");
// }

/*1. Определяем и выводим на экран информацию о том, четное введенное число или нечетное */

// let numbers = Number(prompt("введите число"));

// if (numbers % 2 === 0) {
//   alert("четное число");
// } else {
//   alert("нечетное число");
// }

/*2. Пользователь вводит название месяца исходя из введенного названия месяца нужно вывести сообщение с названием времени года. 
    
    Например:
    
    **Пользователь:** январь
    
    **Компьютер:** это зима */

// let season = prompt("введите месяц");
// season = season.toLowerCase();
// if (season === "декабрь") {
//   document.write("Это зима");
// } else if (season === "январь") {
//   document.write("Это зима");
// } else if (season === "февраль") {
//   document.write("Это зима");
// } else if (season === "март") {
//   document.write("Это весна");
// } else if (season === "апрель") {
//   document.write("Это весна");
// } else if (season === "май") {
//   document.write("Это весна");
// } else if (season === "август") {
//   document.write("Это лето");
// } else if (season === "июнь") {
//   document.write("Это лето");
// } else if (season === "июль") {
//   document.write("Это лето");
// } else if (season === "сентябрь") {
//   document.write("Это осень");
// } else if (season === "октябрь") {
//   document.write("Это осень");
// } else if (season === "ноябрь") {
//   document.write("Это осень");
// } else {
//   document.write("нет такого месяца");
// }

// let month = prompt("введите месяц");
// month = month.toLowerCase();

// if (month === "january") {
//   document.write("winter");
// } else if (month === "february") {
//   document.write("winter");
// } else if (month === "december") {
//   document.write("winter");
// } else if (month === "march") {
//   document.write("spring");
// } else if (month === "april") {
//   document.write("spring");
// } else if (month === "may") {
//   document.write("may");
// } else if (month === "june") {
//   document.write("summer");
// } else if (month === "july") {
//   document.write("summer");
// } else if (month === "august") {
//   document.write("summer");
// } else if (month === "september") {
//   document.write("autumn");
// } else if (month === "october") {
//   document.write("autumn");
// } else if (month === "november") {
//   document.write("autumn");
// } else {
//   document.write("There is no such month");
// }

/*3. Определяем животное, ассоциированное с введенным годом в китайском гороскопе
     Например:
    
    **Пользователь**: 2021
    
    **Компьютер**: Бык  */

let year = Number(prompt("Введите год"));

if (year % 12 === 0) {
  document.write("Обезьяна");
} else if (year % 12 === 1) {
  document.write("Петух");
} else if (year % 12 === 2) {
  document.write("Собака");
} else if (year % 12 === 3) {
  document.write("Свинья");
} else if (year % 12 === 4) {
  document.write("Крыса");
} else if (year % 12 === 5) {
  document.write("Бык");
} else if (year % 12 === 6) {
  document.write("Тигр");
} else if (year % 12 === 7) {
  document.write("Кролик");
} else if (year % 12 === 8) {
  document.write("Дракон");
} else if (year % 12 === 9) {
  document.write("Змея");
} else if (year % 12 === 10) {
  document.write("Лошадь");
} else if (year % 12 === 11) {
  document.write("Коза");
}
