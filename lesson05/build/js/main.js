"use strict";
// Lesson04 - Assertions
// Type assertion & type casting
Object.defineProperty(exports, "__esModule", { value: true });
// convert to more or less specific
let a = "hello";
let b = a; // less specific type
let c = a; // more specific
// can't be used on tsx/react
let d = "world";
let e = "world";
const addOrConact = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConact(2, 2, "concat");
// Be careful since TS sees no problem here - but a string is returned cause of concat as param
let nextVal = addOrConact(2, 2, "concat");
// Force casting or double casting
// 10 as string;
10;
// The DOM
const img = document.querySelector("img");
// < ! > known as non-null assertion
const myImg = document.getElementById("#img");
const nextImg = document.getElementById("#img");
img.src;
myImg.src;
