// Lesson03 - Arrays, Objects

// https://www.youtube.com/watch?v=gieEQFIfgYc&t=2483s

let stringArr = [
  'one',
  'hey',
  'Archie'
];
let guitars = [
  'Strat',
  'Les Paul',
  5150
]
let mixedData = [
  'EVH', 1984, true
]

stringArr[0] = 'John'
stringArr.push('hey')

guitars[0] = 1984
guitars.unshift('Jim')

guitars = stringArr
mixedData = guitars

let test = []
let bands: string[] = []
bands.push('Van')

// Tuple
let myTuple: [string, number, boolean] = [
  'Archie',
  42,
  true
]

let mixed = ['John', 1, false]

// myTuple[1] = 42
// myTuple[2] = 42
// myTuple = mixed
// mixed = myTuple

// Objects
let myObj: object
myObj = []
console.log(typeof myObj);
myObj = bands
myObj = {}

const exampleObj = {
  prop1: 'Archie',
  prop2: true
}

// exampleObj.prop1 = 42
// exampleObj.prop2 = 42

interface Guitarist {
  name?: string,
  active: boolean,
  albums: (string | number)[]
}
// type Guitarist = {
//   name: string,
//   active?: boolean,
//   albums: (string | number)[]
// }

let evh: Guitarist = {
  name: 'Eddie',
  active: false,
  albums: [
    1984, 5150, 'OU812'
  ]
}

let jp: Guitarist = {
  // name: 'Jimmy',
  active: true,
  albums: [
    'I', 'II', 'IV'
  ]
}

// evh = jp

const greetGuitarist = (guitarist: Guitarist) => {
  if(guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}!`
  }

  return `Hello!`
}

console.log(greetGuitarist(jp));

// Enums
// "Unlike most TypeScript fetures, Enums are not a type-level addition to JavaScript but something added to the language and runtime"

enum Grade {
  U = 1,
  D,
  C,
  B,
  A
}

console.log(Grade.U);
