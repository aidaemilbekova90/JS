// let userName = "Vasya";
// let userage = 24;
// let hasCar = true;

// let user = {}; //key:property
// let user = new Object(); literal
// let user = {
//   name: "Ваcя",
//   age: 25,
//   hasCar: true,
//   phone: ["54655", "13121"],
//   skills: {
//     html: "good",
//     css: "excellent",
//   },
//   sayName: function (params) {
//     document.write("vasya");
//   },
// };
// document.write(user.name);

// user.role = "admin";
// document.write(user.role);
// console.log(user);

/*---как узнать ключ---*/
// document.write("name" in user); //true

/*----как обрабатывать --*/

// for (let key in user) {
//   if (typeof user[key] === "object") {
//     for (let subkey in user[key]) {
//       document.write(`${subkey}:${user[key][subkey]} <br>`);
//     }
//   } else {
//     document.write(`${key}:${user[key]} <br>`);
//   }
// }

// let userName = user.name;  //не актуален
// let userAge = user.age;
// document.write(userAge);

/*----деструктуризация--- */
// let { name, age } = user;
// document.write(age);
// let { name: userName, age: userAge } = user;
// document.write(userName);

// let fullName = ["Vasya", "Pushkin"];
// let userName = fullName[0];
// document.write(userName);

// let fullName = ["Vasya", "Pushkin"];
// let [firstName, secondName] = fullName;
// document.write(secondName);

// let myStr = "Hello World";
// let [first, , , fourth] = myStr;
// document.write(fourth);

/*-----json---*/
let user = {
  name: "Ваcя",
  age: 25,
  hasCar: true,
  phone: ["54655", "13121"],
  skills: {
    html: "good",
    css: "excellent",
  },
};
// let userJson = JSON.stringify(user);
// document.write(userJson);

let userJson = JSON.stringify(user);
let objFromJson = JSON.parse(userJson);
for (let key in objFromJson) {
  document.write(`${key}: ${objFromJson[key]} <br>`);
}
const request = new XMLHttpRequest();

request.onload = function () {
  const response = JSON.parse(this.responseText);
  const users = response.users;

  for (let i = 0; i < users.length; i++) {
    document.write(users[i].name + "<br>");
  }
};

request.open("GET", "myJson.json");
request.send();
