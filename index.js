function add(x, y){
  return x + y;
}

function subtract(x, y){
  return x - y;
}
function multiply(x, y){
  return x * y;
}
function divide(x, y){
  return x / y;
}


function isEven(number){
  return number % 2 === 0 ? true : false;
}
function isValidEmail(email){
  return email.includes("@") ? true : false;
}

console.log(isValidEmail("Shuvodipgmail.com"));


// function happyBirthday(username, age){
//   console.log("Happy Birthday to you");
//   console.log("Happy Birthday to you");  
//   console.log(`Happy Birthday dear ${username}!`);
//   console.log(`You are ${age} years old!`);
//   console.log("Happy Birthday to you");
// }

// happyBirthday("Shuvodip", 22);
// happyBirthday("Goku", 68);
// happyBirthday("Bulma", 77);
// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// let attempts = 0;
// let guess;
// let running = true;

// while(running){

//   guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
//   guess = Number(guess);
//   if(isNaN(guess)){
//     window.alert("Please enter a valid number");
//   }
//   else if(guess < minNum || guess > maxNum){
//     window.alert("Please enter a valid number");
//   }
//   else {
//     attempts++;
//     if(guess < answer){
//       window.alert("TOO LOW! TRY AGAIN!");
//     }
//     else if (guess > answer){
//       window.alert("TOO HIGH!");
//     }
//     else {
//       window.alert(`CONGRATULATIONS YOU GUESSED THE NUMBER IN ${attempts}  AND THE ANSWER WAS ${answer}`);
//       running = false;
//   }
//   }

  
// }


// for (let i = 1; i <= 20; i++){
//   if(i == 13){
//     continue;
//   }
//   else {
//     console.log(i);
//   }
// }

// for(let i = 10; i > 0; i-=2){
//   console.log(i);
// }

// console.log("HAPPY NEW YEAR!");

// let loggedIn = false;
// let username;
// let password;

// while(!loggedIn){
//   username = window.prompt("Enter your username");
//   password = window.prompt("Enter your password");

//   if(username === "myUsername" && password === "myPassword"){
//     console.log("You are now logged in");
//     loggedIn = true;
//   }
//   else {
//     console.log("Invalid credentials! Please try again");
//   }

// }

// let username = "";


// do{
//   username = window.prompt("Enter your username: ");
// }while(username === "" || username === null);

// console.log(`Hello, ${username}`);

// EQUALITY OPERRATORS

// const PI = "3.14";

// if(PI != "3.14"){
//   console.log("That is not PI");
//   else {
//     console.log("That is PI");
//   }
// }

// const temp = 25;

// if (temp <= 0 || temp > 30){
//   console.log("The weather is BAD");
// }
//   else {
//     console.log("The weather is GOOD");
//   }

// const isSunny = false;

// if(!isSunny){
//   console.log("It is CLOUDY");
// }
// else {
//   console.log("It is SUNNY");
// }

// NO METHOD CHAINING

// let username = window.prompt("Enter your username; ");

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;



// METHOD CHAINING

// let username = window.prompt("Enter your username; ");

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

// console.log(username);

// const email = "Bro1@gmail.com";

// let username = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@") + 1);

// console.log(username);
// console.log(extension);

// const fullName = "Broseph Code";

// let firstName = fullName.slice(0, 3);
// let lastName = fullName.slice(4, 8);

// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1);
// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);


// console.log(firstName);

// let phoneNumber = "123-456-7890"

// phoneNumber = phoneNumber.padEnd(15, "0");

// console.log(phoneNumber);

// let userName = " ShuvodipDasHimu ";

// // userName = userName.repeat(3);

// let result = userName.includes(" ");

// if(result){
//   console.log("Your username can't include ` `");
// }
//   else{
//     console.log(userName);
//   }
// console.log(userName.length);

// console.log(userName.lastIndexOf("D"));

// console.log(userName.charAt(0));

// let testScore = 92;
// let letterGrade;

// switch (true) {
//   case testScore >= 90:
//     letterGrade = "A";
//     break;
//   case testScore >= 80:
//     letterGrade = "B";
//     break;
//   case testScore >= 70:
//     letterGrade = "C";
//     break;
//     case testScore >= 60:
//     letterGrade = "D";
//     break;
//   default:
//     letterGrade = "F";
//     break;
// }

// console.log(letterGrade);
// // let day = 1;

// switch(day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log(`${day} is not a valid day at all!`);
//     break;
// }

// let age = 21;

// let message = age >= 18 ? "You're an adult" : "You're a minor";

// console.log(message);

// let time = 16;
// let greeting = time < 12 ? "Good Morning!" : "Good Afternoon!";

// console.log(greeting);

// let isStudent = true;
// let message = isStudent ? "You are a student" : "You are not a student";
// console.log(message);

// let purchaseAmount = 99;
// let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(`Your total is $${purchaseAmount - purchaseAmount * discount/100}`);

// const myCheckBox = document.getElementById("myCheckBox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const payPalBtn = document.getElementById("payPalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick= function(){
//   if(myCheckBox.checked){
//     subResult.textContent = "You are subscribed!";
//   } else{
//     subResult.textContent = "You are not subscribed!";
//   }
//   if(visaBtn.checked){
//     paymentResult.textContent = "You are paying with Visa!";
//   } else if(masterCardBtn.checked){
//     paymentResult.textContent = "You are paying with MasterCard!";
//   } else if(payPalBtn.checked){
//     paymentResult.textContent = "You are paying with PayPal!";
//   } else{
//     paymentResult.textContent = "You must select a payment type";
//   }
// }

// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultElement");

// let age;

// mySubmit.onclick = function(){
//   age = myText.value;
//   age = Number(age);
//   if (age >= 100){
//     resultElement.textContent = `You are too old to enter this site`;
//   }
//   else if(age == 0) {
//     resultElement.textContent = `You can't enter. You were just born!`;
//   }
//   else if (age >= 18){
//     resultElement.textContent = `You are old enough to enter this site`;
//   }
//   else if (age < 0) {
//     resultElement.textContent = `Your age can't be below 0`;
//   }
//   else{
//     resultElement.textContent = `You must be 18+ to enter this site`;
//   }
// }

// let hasLicense = false;

// if( age >= 16){
//   console.log("You are old enough to drive");

//   if(hasLicense){
//     console.log("You are allowed to drive");
//   } else {
//     console.log("You must have a license to drive");
//   }
//   else {
//     console.log("You must be 16+ to have a license");
//   }
// }

// let isStudent = false;

// if(isStudent){
//   console.log("You are a student!");
// } else{
//   console.log("You are not a student!");
// }

// let time = 9;

// if(time < 12){
//   console.log("Good Morning!");
// } else{
//   console.log("Good Afternoon!");
// }

// let age = 25;

// if(age >= 18){
//   console.log("You can vote!");
// } else{
//   console.log("You cannot vote!");
// }

// RANDOM NUMBER GENERATOR

// const myButton = document.getElementById("myButton");
// const label1 = document.getElementById("label1");
// const label2 = document.getElementById("label2");
// const label3 = document.getElementById("label3");
// const min = 1;
// const max = 6;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// myButton.onclick = function(){
//   randomNum1 = Math.floor(Math.random() * max) + min;
//   randomNum2 = Math.floor(Math.random() * max) + min;
//   randomNum3 = Math.floor(Math.random() * max) + min;
//   label1.textContent = randomNum1;
//   label2.textContent = randomNum2;
//   label3.textContent = randomNum3;
// }
// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max - min)) + min;

// console.log(randomNum);

// Math.PI

// console.log(Math.PI);
// console.log(Math.E);

// let x = 3;
// let y = 2;
// let z = 1;

// // z = Math.round(x);
// // z = Math.floor(x);
// // z = Math.ceil(x);
// // z = Math.tranc(x);
// // z = Math.pow(x, y);
// // z = Math.sqrt(x);
// // z = Math.log(x);
// // z = Math.sin(x);
// // z = Math.cos(x);
// // z = Math.tan(x);
// // z = Math.abs(x);
// // z = Math.sign(x);
// let max = Math.max(x, y, z);
// console.log(max);
// let min = Math.min(x, y, z);
// console.log(min);
// let random = Math.random();
// console.log(random);
// COUNTER PROGRAM

// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");
// let count = 0;

// increaseBtn.onclick = function(){
//   count++;
//   countLabel.textContent = count;
// }

// decreaseBtn.onclick = function(){
//   count--;
//   countLabel.textContent = count;
// }

// resetBtn.onclick = function(){
//   count = 0;
//   countLabel.textContent = count;
// }

// const PI = 3.14159;
// let radius;
// let circumference;

// document.getElementById("mySubmit").onclick = function(){
//   radius = document.getElementById("myText").value;
//   radius = Number(radius);
//   circumference = 2 * PI * radius;
//   document.getElementById("myH3").textContent = circumference + "cm";
// }

// let username;

// username = window.prompt("What is your username?");

// console.log(username);

// document.getElementById("mySubmit").onclick = function(){
//   username = document.getElementById("myText").value;
//   document.getElementById("myH1").textContent = `Hello ${username}`;
// }
// let x = "";
// let y = "";
// let z = "";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// let age = window.prompt("How old are you");
// age = Number(age);
// age+=1;

// console.log(age, typeof age);

// let students = 30;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// students = students ** 2;
// let extraStudents = students % 4;

// students += 2;
// students -= 1;
// students *= 2;
// students /= 2;
// students **= 2;
// students %= 2;

// students++;
// students--;

// IMPORTANT DOWN

// let result = 6 / 2 ** (2 + 5);

// console.log(result);

// let fullName = "Shuvodip Das";
// let age = 21;
// let isStudent = false;

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `You are ${age} years old`;
// document.getElementById("p3").textContent = `Enrolled > ${isStudent}`;

// console.log(`Hello`);
// console.log(`I like pizza`);

// window.alert(`This is an alert!`);
// window.alert(`I like  pizza!`);

// This is a comment

/* This
 is a comment */

//  document.getElementById("myH1").textContent = `Hello`;
//  document.getElementById("myP").textContent = `I like pizza`;

// let age = 25;
// let price = 10.99;
// let gpa = 2.1;

// let firstName = "Shuvodip";
// let favoriteFood = "Chicken Curry";
// let email = "SHUVODIP@TECH.COM"

// console.log(typeof firstName);
// console.log(`Your name is ${firstName}`)
// console.log(`You like ${favoriteFood}!`);
// console.log(`Your email is ${email}`);

// console.log(`Your name is ${firstName}`);
// console.log(`You are ${age} years old`);
// console.log(`The price is $${price}`);
// console.log(`Your GPA is ${gpa}`);

// let online = true;
// let forSale = true;
// let isStudent = false;

// console.log(`Shuvodip is online > ${online}`);
// console.log(`Is this car for sale > ${forSale}`);
// console.log(`Enrolled > ${isStudent}`);
