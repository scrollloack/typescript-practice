// Lesson02 - Basic Types
// Terminology
// https://www.youtube.com/watch?v=gieEQFIfgYc&t=1539s

// Strongly typed languages demand the specification of types!

let myName: string = "Archie";
let meaningOfLife: number;
let isLoading: boolean;
let album: any; // union type
// let album: string | number; // union type

myName = "John";
meaningOfLife = 42;
isLoading = true;
album = "Van";
album = 1984;
// album = true

const sum = (a: number, b: string) => a + b;

let postID: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g
