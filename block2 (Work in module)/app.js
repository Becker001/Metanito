// const os = require("os");
// const greeting = require("./greeting");
 
// // получим имя текущего пользователя
// let userName = os.userInfo().username;
 
 
// console.log(`Дата запроса: ${greeting.date}`);
// console.log(greeting.getMessage(userName));

// const User = require("./user.js");
// let eugene = new User ("Eugene", 32);
// eugene.sayHi();


// var greeting1 = require("./greeting.js");
// console.log(`Hello ${greeting1.name}`); //Hello Alice
 
// var greeting2 = require("./greeting.js");
// greeting2.name= "Bob";
 
// console.log(`Hello ${greeting2.name}`); //Hello Bob
// // greeting1.name тоже изменилось
// console.log(`Hello ${greeting1.name}`); //Hello Bob

const welcome = require("./welcome");
 
welcome.getMorningMessage();
welcome.getEveningMessage();