let cars = [
    {
        model: "Golf",
        make: "Volkswagen",
        year: 1999,
        color: "black",
    },
    {
        model: "Picanto",
        make: "Kia",
        year: 2020,
        color: "red",
    },
    {
        model: "Peugeot",
        make: "208",
        year: 2021,
        color: "black",
    },
    {
        model: "Fiat",
        make: "Punto",
        year: 2020,
        color: "black",
    }
];

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     if (i === 4) {
//         break;
//     }
// }

// for (let i = 0; i < cars.length; i++) {
//     if (cars[i].year >= 2020) {
//         if (cars[i].color === "black") {
//             console.log("I have found my new car:", cars[i]);
//             break;
//         }
//     }
// }

// for (let i = 0; i < cars.length; i++) {
//     if (cars[i].year >= 2020) {
//         if (cars[i].color === "black") {
//             console.log("I have found my new car:", cars[i]);
//             break;
//         }
//     }
// }

// for (let car of cars) {
//     if (car.color !== "black") {
//         continue;
//     }
//     if (car.year >= 2020) {
//         console.log("we could get this one:", car);
//         break;
//     }
// }

// let i = 0;
// while (i < 50) {
//     i++;
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// let output = "";
// let skip = 6;
// for (let count = 1; count < 11; count++) {
//     if (count === skip) {
//       continue;
//     }
//     output += count;
// }
// console.log(output);

let groups = [
    ["Martin", "Daniel", "Keith"],
    ["Margot", "Marina", "Ali"],
    ["Helen", "Jonah", "Sambikos"],
];

// for (let i = 0; i < groups.length; i++) {
//     let matches = 0;
//     for (let j = 0; j < groups[i].length; j++) {
//         if (groups[i][j].startsWith("M")) {
//             matches++;
//         } else {
//             continue;
//         }
//         if (matches === 2) {
//             console.log("Found a group with two names starting with an M:");
//             console.log(groups[i]);
//             break;
//         }
//     }
// }

// for (let group of groups) {
//     for (let member of group) {
//         if (member.startsWith("M")) {
//             console.log("found one starting with M:", member);
//             break;
//         }
//     }
// }

// outer:
// for (let group of groups) {
//     inner:
//     for (let member of group) {
//         if (member.startsWith("M")) {
//             console.log("found one starting with M:", member);
//             break outer;
//         }
//     }
// }

let obj = {
    item1: "one",
    item2: "two",
    item3: "three",
}
for (const item in obj) {
    console.log(item, obj[item]);
}
const arr = ["item1", "item2", "item3"];

for (let w = 0; w < arr.length; w++) {
    console.log(w, arr[w]);
}

for (const el in arr) {
    console.log(el, arr[el]);
}
