"use strict";
// Lesson04 - Functions
Object.defineProperty(exports, "__esModule", { value: true });
// Literal types
let myName;
// myName = 'John'
let userName;
userName = 'Amy';
// Functions
const add = (a, b) => a + b;
const logMsg = (msg) => {
    console.log(msg);
};
logMsg('Hello!');
logMsg(add(2, 3));
// logMsg(add('a', 3))
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction { (a: number, b: number): number }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// Optional params
// Optional params are always last on the list
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default param value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
// Rest Paramaters - the rest of params
const total = (a, ...nums) => {
    // return nums.reduce((prev, curr) => prev + curr)
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 3));
// logMsg(total(1,2))
// logMsg(total(1,2,3,4))
// Never type
// explicit for function that throws error
// endless loops
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
// use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!');
};
// const fib = (num: number, arr: number[] = [0, 1]): number[] => {
//   if (num <= 2) return arr
//   if (arr.length === 0) [0, 1]
//   const [a, b] = arr.slice(-2)
//   return fib(num - 1, [...arr, a + b])
// }
// logMsg(fib(5))
const fib = (num) => {
    if (num === 0 || num === 1)
        return num;
    return fib(num - 1) + fib(num - 2);
};
logMsg(fib(9));
