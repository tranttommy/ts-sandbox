export {};

// Function Types
function add(x: number, y: number): number {
  return x + y;
}

let add2 = function(x: number, y: number): number {
  return x + y;
};

let add3 = (x: number, y: number): number => x + y;

// most verbose
// let add4: (a: number, b: number) => number = function(
//   x: number,
//   y: number
// ): number {
//   return x + y;
// };

let add4: (a: number, b: number) => number = function(x, y) {
  return x + y;
};

add4 = (t, k) => t * k;
add3 = (t, k) => t / k;
add2 = 2;

// Optional and Default Parameters
// function buildName(firstName: string, lastName: string): string {
//   return `${firstName} ${lastName}`;
// }

// function buildName(firstName: string, lastName?: string) {
//   if(lastName) return `${firstName} ${lastName}`;
//   return firstName;
// }

// Default parameters automatically sets type, and cannot be optional
function buildName2(firstName: string, lastName?: string = 'Smith') {
  return `${firstName} ${lastName}`;
}
// function buildName(firstName: string, lastName: string = 'Smith') {
//   return `${firstName} ${lastName}`;
// }
function buildName(firstName: string, lastName = 'Smith') {
  return `${firstName} ${lastName}`;
}
buildName('Tommy', 4);

// testing interface
// interface StringOperations {
//   (a: string, b: string): string;
// }

// const buildName2: StringOperations = (a, b) => a + b;
