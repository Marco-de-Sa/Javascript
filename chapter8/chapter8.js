// let s = "Hello";
// console.log(
//  s.concat(" there!").toUpperCase().replace("THERE", "you").concat(" You're amazing!");
// );

//

// let x = 7;
// console.log(Number.isNaN(x));
// console.log(isNaN(x));

//

// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURI(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURI(encoded_uri);
// console.log("Decoded:", decoded_uri);

//exe 8.1
// let dec = "How's%20it%20going%3F"
// let url = "http://www.basescripts.com?=Hello World";
// dec = decodeURIComponent(dec);
// url = encodeURIComponent(url);
// console.log(dec);
// dec = encodeURIComponent(dec);
// console.log(dec);
// console.log(url);

// 

// let str_int = "6";
// let int_int = parseInt(str_int);
// console.log("Type of", int_int, "is", typeof int_int);
// let str_float = "7.6";
// let int_float = parseInt(str_float);
// console.log("Type of", int_float, "is", typeof int_float);
// let str_binary = "0b101";
// let int_binary = parseInt(str_binary);
// console.log("Type of", int_binary, "is", typeof int_binary);
// let str_nan = "hello!";
// let int_nan = parseInt(str_nan);
// console.log("Type of", int_nan, "is", typeof int_nan);

//

// let str_float = "7.6";
// let float_float = parseFloat(str_float);
// console.log("Type of", float_float, "is", typeof float_float);
// let str_version_nr = "2.3.4";
// let float_version_nr = parseFloat(str_version_nr);
// console.log("Type of", float_version_nr, "is", typeof float_version_nr);
// let str_int = "6";
// let float_int = parseFloat(str_int);
// console.log("Type of", float_int, "is", typeof float_int);
// let str_binary = "0b101";
// let float_binary = parseFloat(str_binary);
// console.log("Type of", float_binary, "is", typeof float_binary);
// let str_nan = "hello!";
// let float_nan = parseFloat(str_nan);
// console.log("Type of", float_nan, "is", typeof float_nan);

//

// let arr = ["beans", "greens", "tomatoes", "lamb"];
// function printStuff(element, index) {
//     console.log("Printing stuff:", element, "on array position:", index);
// }
// arr.forEach(printStuff);

//

// let arr = ["blue", 5, "Tjed", new Date(), true];
// function checkString(element, index) {
//     return typeof element === "object";
// }
// let filterArr = arr.filter(checkString);
// console.log(filterArr);

//

// console.log(arr.every(checkString));
// arr = ["grapefruit", 4, "hello", 5.6, true];
// arr.copyWithin(0, 3, 5);
// console.log(arr);

//

// let arr = ["grapefruit", 4, "hello", 5.6, true, false];
// arr.copyWithin(0, 3);
// console.log(arr);

//

// let arrNum = [1, 2, 3, 4];
// let arrNum1 = arrNum.map(function(indexValue) {
//     return indexValue * indexValue;
// });
// let arrNum2 = arrNum.map((indexValue)=> indexValue*indexValue);
// console.log(arrNum1);
// console.log(arrNum2);

//

// let bb =["so", "bye", "bye", "love"];
// console.log(bb.lastIndexOf("bye"));
// console.log(bb.lastIndexOf("hi"));

//exe 8.2
// let arr1 = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike", "Laurence", "Mike", "Laurence", "Mike"];
// arr2 = arr1.filter((value, index, array) => {
//     console.log(value, index, array.indexOf(value));
//     return array.indexOf(value) === index;
// });
// console.log(arr2);

//exe 8.3
// let arrNum = [1, 2, 3, 4];
// let arrNum1 = arrNum.map(function(indexValue) {
//     return indexValue * 2
// });
// let arrNum2 = arrNum.map((indexValue)=> indexValue*2);
// console.log(arrNum1)
// console.log(arrNum2);

//

// let s1 = "hello ";
// let s2 = "Javascript";
// let result = s1.concat(s2);
// console.log(result)

//

// let result = "Hello Javascript";
// let arr_result = result.split(" ");
// console.log(arr_result);

//

// let favouriteFruits = "strawberry, watermelon, grapefruit";
// let arr_fruits = favouriteFruits.split(", ");
// console.log(arr_fruits)

//

// let letters = ["a", "b", "c"];
// let x = letters.join('-');
// console.log(x);

//

// let poem = "Roses are red, violets are blue, if I can do JS, then you can too.";
// let index_re = poem.indexOf("re");
// let indexNotFound = poem.indexOf("python");
// if (poem.indexOf("python") != -1) {
//     console.log(indexNotFound);
// }
// let lastIndex_re = poem.lastIndexOf("re");
// let pos1 = poem.charAt(10);
// let pos2 = poem.charAt(1000);
// console.log(pos2);
// console.log(pos1);
// console.log(lastIndex_re);
// console.log(index_re);

//

// let str = "create a substring";
// let substr1 = str.slice(5);
// let substr2 = str.slice(0, 3);
// console.log("1:", substr1);
// console.log("2:", substr2);

//

// let hi = "Hi buddy";
// let new_hi = hi.replace("buddy", "Pascal");
// console.log(new_hi);
// let new_hi2 = hi.replace("not there", "never there");
// console.log(new_hi2);

//

// let s3  = "hello hello";
// let new_s3 = s3.replace("hello", "oh");
// console.log(new_s3);
// let new_s4 = s3.replaceAll("hello", "oh");
// console.log(new_s3);

//

// let low_bye = "bye!";
// let up_bye = low_bye.toUpperCase();
// console.log(up_bye);

//

// let caps = "HI HOW ARE YOU?";
// let fixed_caps = caps.toLowerCase();
// console.log(fixed_caps);

//

// let caps = "HI HOW ARE YOU?";
// let fixed_caps = caps.toLowerCase();
// let first_capital = fixed_caps.charAt(0).toUpperCase().concat(fixed_caps.slice(1));
// console.log(first_capital);

//

// let encouragement = "You are doing great, keep up the good work!";
// let bool_start = encouragement.startsWith("You");
// console.log(bool_start);

//

// let bool_start2 = encouragement.startsWith("you");
// console.log(bool_start2);

//exe 8.4
// let capatalised = "ThIs Is GoInG tO bE fIxEd";
// function capatalise(str) {
//     str = str.toLowerCase();
//     let tempArray = [];
//     let words = str.split(" ");
//     words.forEach(word => {
//         let temp = word.slice(0, 1).toUpperCase() + word.slice(1);
//         tempArray.push(temp);
//     });
//     return tempArray.join(" ");
// }
// console.log(capatalise(capatalised));

//exe 8.5
// let str = "I love JavaScript";
// let arrVowel = ["a", "e", "i", "o", "u"];
// str = str.toLowerCase();
// arrVowel.forEach(function(letter, index){
//     console.log(letter);
//     str = str.replaceAll(letter, index);
// });
// console.log(str);

//

// let x = 34;
// console.log(isNaN(x));
// console.log(isNaN(x));
// let str = "hi";
// console.log(isNaN(str));
// let str1 = "5";
// console.log(isNaN(str1));

//

// let x = 3;
// let str = "finite";
// console.log(isFinite(x));
// console.log(isFinite(str));
// console.log(isFinite(Infinity));
// console.log(isFinite(10 / 0));

//

// let x = 3;
// let str = "integer";
// console.log(Number.isInteger(x));
// console.log(Number.isInteger(str));
// console.log(Number.isInteger(Infinity));
// console.log(Number.isInteger(2.4));

//

// let x = 1.23456;
// let newX = x.toFixed(3);
// console.log(x, newX);

//

// let highest = Math.max(2, 56, 12, 1, 233, 4);
// console.log(highest);
// let lowest = Math.min(2, 56, 12, 1, 233, 4);
// console.log(lowest);
// let highestOfWords = Math.max("hi", 3, "bye");
// console.log(highestOfWords);
// let result = Math.sqrt(64);
// console.log(result);
// let result2 = Math.pow(5, 3);
// console.log(result2);

//

// let x = 6.78;
// let y = 5.34;
// console.log("X:", x, "becomes", Math.round(x));
// console.log("Y:", y, "becomes", Math.round(y));
// let negativeX = -x;
// let negativeY = -y;
// console.log("negativeX:", negativeX, "becomes", Math.ceil(negativeX));
// console.log("negativeY:", negativeY, "becomes", Math.ceil(negativeY));
// console.log("X:", x, "becomes", Math.floor(x));
// console.log("Y:", y, "becomes", Math.floor(y));
// console.log("negativeX:", negativeX, "becomes", Math.floor(negativeX));
// console.log("negativeY:", negativeY, "becomes", Math.floor(negativeY));
// console.log("X:", x, "becomes", Math.trunc(x));
// console.log("Y:", y, "becomes", Math.trunc(y));

//

// let x = 2;
// let exp = Math.exp(x);
// console.log("Exp:", exp);
// let log = Math.log(exp);
// console.log("Log:", log);

//exe 8.6
// console.log(Math.PI);
// console.log(Math.ceil(5.7));
// console.log(Math.floor(5.7));
// console.log(Math.round(5.7));
// console.log(Math.random());
// console.log(Math.floor(Math.random()*(10+1)));
// console.log(Math.floor(Math.random()*(10)+1));
// console.log(Math.floor(Math.random()*(100)+1));
// function randomNum(min, max) {
//     for (let i = 0; i < 100; i++) {
//         console.log(Math.floor(Math.random()* max + min));
//     }
// }
// randomNum(1, 100);

//

// let currentDateTime = new Date();
// console.log(currentDateTime);
// let now2 = Date.now();
// console.log(now2);
// let stringDate = new Date("sat Jun 05 2021 12:40:12 GMT+0200");

//

// let d = new Date();
// console.log("Day of week:", d.getDay());
// console.log("Day of month:", d.getDate());
// console.log("Month:", d.getMonth());
// console.log("Year:", d.getFullYear());
// console.log("Seconds:", d.getSeconds());
// console.log("Milliseconds:", d.getMilliseconds());
// console.log("Time:", d.getTime());
// d.setFullYear(2010);
// console.log(d);
// d.setMonth(9);
// console.log(d);
// d.setDate(10);
// console.log(d);
// d.setHours(10);
// console.log(d);
// d.setTime(1622889770682);
// console.log(d);
// let d1 = Date.parse("June 5, 2021");
// console.log(d1);
// let d2 = Date.parse("6/5/2021");
// console.log(d2);
// console.log(d.toDateString());
// console.log(d.toLocaleDateString());

//exe 8.7
// let futureDate = new Date(2077, 2, 12);
// console.log(futureDate);
// let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let day = futureDate.getDate();
// let month = futureDate.getMonth();
// let year = futureDate.getFullYear();
// let myDate = `${months[month-1]} ${day} ${year}`;
// console.log(myDate);

//

