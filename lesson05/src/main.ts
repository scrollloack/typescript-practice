// Lesson05 - Assertions
// Type assertion & type casting

// https://www.youtube.com/watch?v=gieEQFIfgYc&t=6097s

// Sometime you will have info about the type of a value that typescript can't know about

type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific
let a: One = "hello";
let b = a as Two; // less specific type
let c = a as Three; // more specific

// can't be used on tsx/react
let d = <One>"world";
let e = <string | number>"world";

const addOrConact = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConact(2, 2, "concat") as string;

// Be careful since TS sees no problem here - but a string is returned cause of concat as param
let nextVal: number = addOrConact(2, 2, "concat") as number;

// Force casting or double casting
// 10 as string;
10 as unknown as string;

// The DOM
const img = document.querySelector("img") as HTMLImageElement;
// < ! > known as non-null assertion
const myImg = document.getElementById("#img")! as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById("#img");

img.src;
myImg.src;
