export { }
// Hello World of Generics
// identity function that returns the same type it receives
// function id(arg: number): number {
//   return arg;
// }
// T is a type variable and is arbitrarily named
function id<T>(arg: T): T {
  return arg;
}

id<number>(5);
id(6);
id<string>('hello');
id('bye');

function arrayId<T>(arg: T[]): T[] {
  return arg;
}

function idArray<T>(arg: Array<T>): Array<T> {
  return arg;
}

// Generic Types
let myId: <U>(arg: U) => U = id;
let myId2: { <T>(arg: T): T } = id;

interface GenericIdFn {
  <T>(arg: T): T;
}

let myId3: GenericIdFn = id;

interface GenericIdFn2<T> {
  (arg: T): T;
}

let myId4: GenericIdFn2<number> = id;

// Generic Classes
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = (x, y) => x + y;

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = '';
stringNumeric.add = (x, y) => x + y;

// Generic Constraints
function loggingLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

interface Lengthwise {
  length: number;
}

loggingLength('hello');
loggingLength([]);
loggingLength({ length: 4 })
loggingLength(4);

// Using Type Parameters in Generic Constraints
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3 };
getProperty(x, 'a');
getProperty(x, 'd');
