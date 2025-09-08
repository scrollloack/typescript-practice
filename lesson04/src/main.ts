// Lesson04 - Functions

// https://www.youtube.com/watch?v=gieEQFIfgYc&t=4199s

// Type Aliases
// We can't do this on interfaces
type stringOrNumber = string | number

type strinOrNumberArray = (string | number)[]

type Guitarist = {
  name?: string,
  active: boolean,
  albums: strinOrNumberArray
}

type UserId = stringOrNumber

// Literal types
let myName: 'Dave'
// myName = 'John'

let userName: 'Dave' | 'John' | 'Amy'
userName = 'Amy'

// Functions
const add = (a: number, b: number): number => a + b

const logMsg = (msg: any): void => {
  console.log(msg);
}

logMsg('Hello!')
logMsg(add(2,3))
// logMsg(add('a', 3))

let subtract = function(c: number, d: number): number {
  return c - d
}

type mathFunction = (a: number, b: number) => number
// interface mathFunction { (a: number, b: number): number }

let multiply: mathFunction = function (c, d) {
  return c * d
}

logMsg(multiply(2,2))

// Optional params
// Optional params are always last on the list
const addAll = (a: number, b: number, c?: number): number => {
  if(typeof c !== 'undefined') {
    return a + b + c
  }

  return a + b
}

// default param value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c
}

logMsg(addAll(2,3,2))
logMsg(addAll(2,3))
logMsg(sumAll(2,3))
logMsg(sumAll(undefined,3))

// Rest Paramaters - the rest of params
const total = (a: number, ...nums: number[]): number => {
  // return nums.reduce((prev, curr) => prev + curr)
  return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(10,2,3))
// logMsg(total(1,2))
// logMsg(total(1,2,3,4))

// Never type
// explicit for function that throws error
// endless loops
const createError = (errMsg: string): never => {
  throw new Error(errMsg)
}

const infinite = () => {
  let i: number = 1
  while (true) {
    i++
    if (i > 100) break
  }
}

// custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === 'number' ? true : false
}

// use of the never type
const numberOrString = (value: number | string): string => {
  if(typeof value === 'string') return 'string'
  if(isNumber(value)) return 'number'
  return createError('This should never happen!')
}

// const fib = (num: number, arr: number[] = [0, 1]): number[] => {
//   if (num <= 2) return arr
//   if (arr.length === 0) [0, 1]
//   const [a, b] = arr.slice(-2)
//   return fib(num - 1, [...arr, a + b])
// }

// logMsg(fib(5))

const fib = (num: number): number => {
  if (num === 0 || num === 1) return num
  return fib(num - 1) + fib(num - 2)
}

logMsg(fib(9))