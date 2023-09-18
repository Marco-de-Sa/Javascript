// class ClassName {
//     constructor(prop1, prop2) {
//         this.prop1 = prop1;
//         this.prop2 = prop2;
//     }
// }
// let obj = new ClassName("arg1", "arg2");
// function Dog(dogName, weight, color, breed) {
//     this.dogName = dogName;
//     this.weight = weight;
//     this.color = color;
//     this.breed = breed;
// }
// let dog = new Dog("Jacky", 30, "brown", "labrador");

//

// class Dog {
//     constructor(dn, w, c, b) {
//         this.dogName = dn;
//         this.weight = w;
//         this.colour = c;
//         this.breed = b;
//     }
// //this is practice
//     getDog(){
//         return this.dogName;
//     }
//     getWeight(){
//         return this.weight;
//     }
//     getColour(){
//         return this.colour;
//     }
//     getBreed(){
//         return this.breed;
//     }
//     setName(Name){
//         this.dogName = Name;
//     }
//     setWeight(weight){
//         this.weight = weight;
//     }
//     setColour(colour){
//         this.colour = colour
//     }
//     setBreed(breed){
//         this.breed = breed
//     }
// //
// }
// let dog = new Dog();
// let Name = prompt("what is the dogs name?");
// dog.setName(Name);
// let weight = prompt("what is the dog's weight in kg?")
// dog.setWeight(weight);
// let colour = prompt("what is the dogs colour")
// dog.setColour(colour)
// let breed = prompt("what is the dog's breed?");
// dog.setBreed(breed);
// console.log(dog.getDog(), "is a", dog.getBreed(), "and weighs", dog.getWeight(),"kg.");

//

// class person {
//     constructor(fn, ln = "Doe"){
//         this.firstname = fn;
//         this.lastname = ln;
//     }
// }
// let p = new person("Maaike");
// console.log("hey", p.firstname, p.lastname);

//exe 7.1
// class person {
//     constructor(fn, ln) {
//         this.firstname = fn;
//         this.lastname = ln;
//     }
//     greetPerson(){
//         return `hello ${this.firstname} ${this.lastname}`;
//     }
// }
// let friend1 = new person("Jayden", "Koch");
// let friend2 = new person("Reiner", "Blom");
// console.log(friend1.greetPerson(), "\n" + friend2.greetPerson());

//

// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet() {
//         console.log("Hi there!");
//     }
//     compliment(name, object) {
//         return "That's a wonderful " + object + ", " + name;
//     }
// }
// let p = new Person("Maaike", "van Putten");
// p.greet();
// let compliment = p.compliment("Harry", "hat");
// console.log(compliment);

//exe 7.2
// class person {
//     constructor(fn, ln) {
//         this.firstname = fn;
//         this.lastname = ln;
//     }
//     greetPerson() {
//         return `hello ${this.firstname} ${this.lastname}`;
//     }
//     fullName(){
//         return `${this.firstname} ${this.lastname}`;
//     }
// }
// let p = new person("Marco", "de Sá");
// console.log(p.fullName());

//

// class Person {
//     #firstname
//     #lastname
//     constructor(firstname, lastname) {
//         // if (firstname.startsWith("M")) {
//         //     this.#firstname = firstname;
//         // } else {
//         //     this.#firstname = "M" + firstname;
//         // }
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
//     get firstname() {
//         return this.#firstname;
//     }
//     set firstname(firstname) {
//         if (firstname.startsWith("M")) {
//             this.#firstname = firstname;
//         } else {
//             this.#firstname = "M" + firstname;
//         }
//     }
//     // set firstname(firstname) {
//     //     this.#firstname = firstname;
//     // }
//     get lastname() {
//         return this.#lastname;
//     }
//     set lastname(lastname) {
//         this.#lastname = lastname;
//     }
// }
// let p1 = new Person("Maria", "Saga");
// p1.firstname = prompt("what is your firstname?");
// p1.lastname = prompt("what is your lastname?");
// console.log(p1.firstname, p1.lastname);

//

// class vehicle {
//     constructor(colour, currentSpeed, maxSpeed) {
//         this.colour = colour;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }
//     move() {
//         console.log(`moving at ${this.currentSpeed}`);
//     }
//     accelerate(amount) {
//         this.currentSpeed += amount;
//     }
// }
// class Motorcycle extends vehicle {
//     constructor(colour, currentSpeed, maxSpeed, fuel) {
//         super(colour, currentSpeed, maxSpeed);
//         this.fuel = fuel;
//     }
//     doWheelie() {
//         console.log("Driving on one wheel");
//     }
// }
// let motor = new Motorcycle("Black", 0, 250, "gasoline");
// console.log(motor.colour);
// motor.accelerate(50);
// motor.move();

//

// class person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet() {
//         console.log("hey there!");
//     }
// }
// person.prototype.introduce = function () {
//     console.log("Hi, I'm", this.firstname);
// };
// person.prototype.favoriteColor = "green"
// let p = new person("Maria", "Saga");
// console.log(p.favoriteColor);
// p.introduce();

//exe 7.3
// class animal{
//     constructor(species, callType){
//         this.species = species;
//         this.callType = callType;
//     }
//     getAnimal(){
//         console.log(`${this.species} ${this.callType}`);
//     }
// }
// animal.prototype.toString = function () {
//     return `animal: ${this.species} \ncall type: ${this.callType}`;
// }
// let a1 = new animal("bear", "roar");
// let a2 = new animal("wolf", "howl");
// a1.getAnimal();
// a2.getAnimal();
// console.log(a1.toString());
// console.log(a2.toString());

//chapter project 1
class employee{
    constructor(efn, eln, nry){
        this.employeeFirstname = efn;
        this.employeeLastname = eln;
        this.numberOfYearsWorked = nry;
    }
}
employee.prototype.toString = function () {
    return `${this.employeeFirstname} ${this.employeeLastname} has worked ${this.numberOfYearsWorked} years at the company`;
}
let emp1 = new employee("John", "Doe", 5);
let emp2 = new employee("Jane", "Doe", 2);
console.log(emp1.toString());
console.log(emp2.toString());

//chapter project 2
class calculator{
    #item1price = 11.5
    #item2price = 22.10
    constructor(itemsBought1, itemsBought2){
        this.itemsbought1 = itemsBought1;
        this.itemsbought2 = itemsBought2;
    }

    calcCost(){
        return (this.#item1price * this.itemsbought1) + (this.#item2price * this.itemsbought2);
    }

    get cost(){
        return this.calcCost();
    }
}

let ic1 = new calculator(1,2);
let ic2 = new calculator(5,1);
let ic3 = new calculator(3,3);
console.log(ic1.cost);
console.log(ic2.cost);
console.log(ic3.cost);