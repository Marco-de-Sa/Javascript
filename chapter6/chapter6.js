// function sayHello() {
//     let you = prompt("What's your name? ");
//     alert("Hello " + you + "!");
// }
// sayHello();

// let varContainingFunction = function () {
//     let varInFunction = "I'm in a function.";
//     alert("hi there! " + varInFunction);
// };
// varContainingFunction();

//exe 6.1
// let answer1 = prompt("input first number");
// let answer2 = prompt("input second number");
// let num1 = Number(answer1);
// let num2 = Number(answer2);

// function add(num1, num2) {
//     addition = num1 + num2;
//     return addition;
// }

// let result = add(num1, num2);
// alert(result);

//exe 6.2
// let arr = ["blue", "fast", "rich", "tough", "cool"];
// let Name = prompt("what is your name"); 

// function describe(name, arr) {
//     let desc = arr[Math.floor(Math.random() * arr.length)];
//     let output = desc + " " + name;
//     return output;
// }

// console.log(describe(Name, arr));

//exe 6.3
// function calc() {
//     let num1 = Number(prompt("input the first number"));
//     let num2 = Number(prompt("input the second number"));
//     let op = prompt("should we *add* or *subtract*");
//     let output = "";
//     if (op == "subtract") {
//         output = num1 - num2;
//     } else {
//         output = num1 + num2;
//     }
//     return output;
// }
// let answer = calc();
// alert(answer);

//

// function addTwoNumbers(x = 2, y = 3) {
//     console.log(x + y);
// }
// addTwoNumbers();
// addTwoNumbers(6, 6);
// addTwoNumbers(10);
// addTwoNumbers(1,2,3,4);

// let addTwoNumbers = (1, 2) => console.log(x + y);

// const arr = ["squirrel", "alpaca", "buddy"];
// arr.forEach(e => console.log(e));

// let spread = ["so", "much", "fun"];
// let message = ["JavaScript", "is", ...spread, "and", "very", "powerful"];
// console.log(message);

// function addTwoNumbers(x, y) {
//     console.log(x + y);
// }
// let arr = [5, 9];
// addTwoNumbers(...arr);

// function addFourNumbers(x, y, z, a) {
//     console.log(x + y + z + a);
// }
// let arr = [5, 9];
// let arr2 = [6, 7];
// addFourNumbers(...arr, ...arr2);
// addFourNumbers(5, 9, 6, 7);

// function someFunction(param1, ...param2) {
//     console.log(param1, param2);
// }
// someFunction("hi", "there!", "How are you?");

//let favoriteSubject = prompt("What is your favorite subject?");

//

//exe 6.4
// let arr = [];
// let num1;
// let num2;
// function add(n1, n2) {
//     let output = n1 + n2;
//     return output;
// }
// for (let i = 0; i < 10; i++) {
//     num1 = i * 5;
//     num2 = i * i;
//     arr[i] = add(num1, num2);
// }
// console.log(arr);

//

// (function () {
//     console.log("IIFE!");
// })();

// (() => {
//     console.log("run right away");
// })();

// let Name = "Marco";
// let day = 10;
// let month = "may"
// (function hello() {
//     console.log(`hello my name is ${Name} and today is the ${day} of ${month}`);
// })();

//

// exe 6.5
// let num = 1000;
// (function assign() {
//     let num = 100;
//     console.log(num);
// })();

// result = (function () {
//     let result = "the results are!";
//     return result;
// })();

// console.log(num);
// console.log(result);

// (function(name) {
//     console.log(`my name is ${name}`)
// })("Marco");

//

// function getRecursive(nr) {
//     console.log(nr);
//     if (nr > 0) {
//         getRecursive(--nr);
//     }
// }
// getRecursive(10);

//

// function logRecursive(nr) {
//     console.log(`Started function: ${nr}`);
//     if (nr > 0) {
//         logRecursive(nr - 1);
//     } else {
//         console.log("done with recursion");
//     }
//     console.log(`Ended function: ${nr}`);
// }
// logRecursive(3);

//exe 6.6
// function factorialOf(num) {
//     if (num == 0) {
//         return 1;
//     }else{
//         return num * factorialOf(--num);
//     }
// }
// console.log(factorialOf(6));

//

// function doOuterFunctionStuff(nr) {
//     console.log("Outer function");
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//         console.log(x + 7);
//         console.log("I can access outer variables:", nr);
//     }
// }
// doOuterFunctionStuff(2);

//exe 6.7
// let start = 10;
// function countdown1(num) {
//     console.log(num);
//     if (num < 1) {
//         return;
//     } else {
//         return countdown1(num - 1);
//     }
// }
// countdown1(start);
// function countdown2(num) {
//     console.log(num);
//     if (num > 0) {
//         num--;
//         return countdown2(num);
//     }
//     return;
// }
// countdown2(start);

//

// let functionVariable = function () {
//     console.log("Not so secret though.");
// }
// functionVariable();

//exe 6.8
// let anonFunctionTest = function (val) {
//     console.log(val);
// }
// anonFunctionTest("hey there 1");
// function normalFunctionTest(val) {
//     console.log(val);
// }
// normalFunctionTest("hey there 2");

//

// let functionVariable = function () {
//     console.log("Not so secret though.");
// }
// functionVariable();

// function doFlexibleStuff(executeStuff) {
//     executeStuff();
//     console.log("inside do flexible stuff");
// }

// doFlexibleStuff(functionVariable);

// let anotherFunctionVariable = function () {
//     console.log("Another anonymous function implementation");
// }

// doFlexibleStuff(anotherFunctionVariable);

// let youGotThis = function () {
//     console.log("You're doing really well, keep coding!");
// }

// setTimeout(youGotThis, 5000)
// setInterval(youGotThis, 1000);

//chapter 6 project
let count = 10;
let invCount = 0;
function recCount(count) {
    if (count > 0) {
        count--;
        invCount++;
        console.log(invCount);
        recCount(count);
    }
}
recCount(count);

