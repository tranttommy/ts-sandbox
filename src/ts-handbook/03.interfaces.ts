export {};
// First Interface

// function printLabel({ label }: {label: string}) {
//   console.log(label);
// }

function printLabel({ label }: LabeledValue) {
  console.log(label);
}
interface LabeledValue {
  label: string;
}

let myObj = {
  size: 10,
  label: 'Size 10'
};

printLabel(myObj);

// Optional Properties
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare({
  color,
  width
}: SquareConfig): { color: string; area: number } {
  let newSquare = { color: 'white', area: 100 };
  color && (newSquare.color = color);
  width && (newSquare.area = width ** 2);
  return newSquare;
}

let mySquare = createSquare({ color: 'black' });

// Readonly Properties
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
p1.x = 5;

let a2: number[] = [1, 2, 3];
let ro: ReadonlyArray<number> = a2;
ro[1] = 12;
ro.length = 2;
a2 = ro;
a2 = ro as number[];
// const is for variables, readonly is for properties

// Excess Property Checks
createSquare({ colour: 'blue', width: 20 });
createSquare({ colour: 'blue', width: 20 } as SquareConfig);
let squareOptions = { colour: 'blue', width: 20 };
createSquare(squareOptions);

interface SquareConfig2 {
  color?: string;
  width?: number;
  [propName: string]: any;
}

function createSquare2({
  color,
  width
}: SquareConfig2): { color: string; area: number } {
  let newSquare = { color: 'white', area: 100 };
  color && (newSquare.color = color);
  width && (newSquare.area = width ** 2);
  return newSquare;
}

createSquare2({ colour: 'blue', width: 20 });

// Function Types
interface SearchFunc {
  (source: string, subString: string): boolean;
}

// let mySearch: SearchFunc = function(src: string, sub: string) {
//   let result = src.search(sub);
//   return result > -1;
// }

// interface covers type checking
let mySearch2: SearchFunc = function(src, sub) {
  let result = src.search(sub);
  return result > -1;
};

// Class Types
// interface ClockInterface {
//   currentTime: Date;
//   setTime(d: Date): void;
// }

// class Clock implements ClockInterface {
//   currentTime: Date = new Date();
//   setTime(d: Date) {
//     this.currentTime = d;
//   }
//   constructor(h: number, m: number) {}
// }

interface ClockInterface {
  tick(): void;
}

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log('beep beep');
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log('tick tock');
  }
}

let digital: DigitalClock = createClock(DigitalClock, 12, 17);
let analog: AnalogClock = createClock(AnalogClock, 5, 12);

const Clock: ClockConstructor = class Clock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log('I am clock');
  }
};

// Extending Interfaces
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square: Square = {
  color: 'red',
  sideLength: 1
};

let square2 = {} as Square;
square2.color = 'white';
square2.sideLength = 3;

interface PenStroke {
  penWidth: number;
}

interface Square2 extends Shape, PenStroke {
  sideLength: number;
}

let squar: Square2 = {
  color: 'yellow',
  sideLength: 3,
  penWidth: 5
};

// Interfaces Extending Classes
class Control {
  private state: any;
  other: any;
}
interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control {
  select() {}
}

class Image implements SelectableControl {
  select() {}
}
