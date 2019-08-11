let isDone: boolean = true;
let number: number = 123;
let hex: number = 0x13412abce;
number = hex;
number = NaN;

let color: string = 'blue';
color = 'red';

let fullName: string = 'Bobby Bobbins II';
let age: number = 39;
let sentence: string = `Hello, my name is ${fullName}. I'll be ${age +
  1} next year.`;

let list: number[] = [1, 2, 4];
let list2: Array<number> = list;

let x: [string] = ['a'];
let y: [string, number, boolean] = ['a', 5, true];
y[0].replace('a', 'b');
y[1].toString();
y[3] = 4;

enum Color {
  Red = 'a',
  Green = 4,
  Blue
}
let green: Color = Color.Green;
let red: Color = Color.Red;
let red2: string = Color.Green;
let red3: string = Color.Red;

let z: any[] = [1, true, 'a', null, undefined, { hello: 4 }];

function warnUser(): void {
  console.log('Void cannot have return value');
  return 3; // not okay
  // return null; // okay
  // return undefined; // okay
}

let a: void = null;
a = undefined;

let nil: null = null;
nil = undefined;
nil = a;

let nal: undefined = undefined;
nal = null;
nal = a;

// null and undefined are subtypes to all othertypes, so any other type can be assigned a null or undefined
// will not work with --strictNullChecks
age = nal;
number = nil;
sentence = a;

// never is for throw and no returns, which is not the same as undefined returns
function error(message: string): never {
  throw new Error(message);
}

function fail(): never {
  return new Error('poop');
}

function infiniteLoop(): never {
  while (true) {}
}

let someValue: any = 'this is string';
let strLength: number = (<string> someValue).length;
strLength = (someValue as string).length;

let someStr: string = 'another string';
let strLength2: number = someStr.length;
