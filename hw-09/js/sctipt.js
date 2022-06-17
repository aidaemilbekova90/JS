/* Создать массив из 15 объектов с постами для сайта блога с ключами title, и author. Необходимо перебрать массив и вывести название поста в теге h3, и автора в теге p */

// const posts = [
//   { title: "John", author: "Aytmatov" },
//   { title: "Earth", author: "Akin" },
//   { title: "moon", author: "tolgonay" },
//   { title: "sweet", author: "Sweet" },
//   { title: "shake", author: "Shake" },
//   { title: "Gocorona", author: "Freelancer" },
//   { title: "kindle", author: "Amazon" },
//   { title: "hero", author: "leo" },
//   { title: "dog", author: "Turgenov" },
//   { title: "Prince", author: "Aygun" },
//   { title: "sunshine", author: "Akun" },
//   { title: "diamond", author: "Lemon" },
//   { title: "ears", author: "Koko" },
//   { title: "fears", author: "bespalov" },
// ];

// document.write(`<h3>${title}</h3>,`);

// for (let key in posts) {
//   if (typeof posts[key] === "object") {
//     for (let subkey in posts[key]) {
//       document.write(`${subkey}:${posts[key][subkey]} <br>`);
//     }
//   } else {
//     document.write(`${key}:${posts[key]} <br>`);
//   }
// }

// for (let key in posts) {
//   if (typeof posts[key] === "object") {
//     for (let subkey in posts[key]) {
//       document.write(`<h3>${posts[key][subkey]}</h3> <br>`);
//     }
//   } else {
//     document.write(`${key}:${posts[key]} <br>`);
//   }
// }

// for (let i = 0; i < posts.length; i++) {
//   document.write(`<h3> "${posts[i].title}"</h3>: <p>${posts[i].author}</p>  `);
// }

// posts.forEach((item) => {
//   document.write(`<h3> "${item.title}"</h3>: <p>${item.author}</p>  `);
// });

// for (const item of posts) {
//   console.log(item);

//   document.write(`<h3> "${item.title}"</h3>: <p>${item.author}</p>  `);
// }

/*Имеется массив объектов с фильмами. У объектов имеются ключи: title (название фильма), director (режиссёр) и duration (длительность в минутах). Необходимо вывести 3 фильма с наиболее длинным хронометражом. */

// const request = new XMLHttpRequest();

// request.onload = function () {
//   const response = JSON.parse(this.responseText);
//   const movies = response.movies;

//   const sortedMovies = movies.sort((a, b) => b.duration - a.duration);

//   console.log(sortedMovies);

//   for (let i = 0; i < 3; i++) {
//     document.write(`
//       <p>Title: ${sortedMovies[i].title} </p>
//       <p>Author: ${sortedMovies[i].director} </p>
//       <p>Duration: ${sortedMovies[i].duration} </p>
//     `);
//   }
// };

// request.open("GET", "myJson.json");
// request.send();

/*2.Имеется массив имен, необходимо перебрать массив и все имена из массива нужно перенести в массив объектов и записать под ключом name.*/

const names = [
  "Jonny",
  "Bob",
  "",
  "Ivan",
  "Masha",
  "Pete",
  "Akmat",
  "Tashmat",
  "",
];

function toObj(arr) {
  let arrOfObj = [];

  for (let item of arr) {
    if (item) {
      arrOfObj.push({ name: item });
    }
  }

  return arrOfObj;
}

console.log(toObj(names));
