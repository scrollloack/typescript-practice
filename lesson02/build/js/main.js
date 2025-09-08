"use strict";
// Lesson02 - Basic Types
// Terminology
// https://www.youtube.com/watch?v=gieEQFIfgYc&t=1539s
Object.defineProperty(exports, "__esModule", { value: true });
// Strongly typed languages demand the specification of types!
let myName = "Archie";
let meaningOfLife;
let isLoading;
let album; // union type
// let album: string | number; // union type
myName = "John";
meaningOfLife = 42;
isLoading = true;
album = "Van";
album = 1984;
// album = true
const sum = (a, b) => a + b;
let postID;
let isActive;
let re = /\w+/g;
