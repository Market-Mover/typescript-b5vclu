// basic types
let id: number = 5;
let company: string = 'FLEX LNG';
let idPublished: boolean = true;
let x: any = 'hello';

let ids: number[] = [1, 2, 3, 4, 5];
let array: any = [1, true, 'hello'];

// Tuple
let person: [number, string, boolean] = [1, 'Jim', true];

// Tuple Array
let employee: [number, string][];
employee = [
  [1, 'Jon'],
  [2, 'John'],
  [3, 'Jane'],
];

// Union
let pid: string | number;
pid = '22';

// Enum
enum Direction1 {
  Up = 1, // new value
  Down,
  Left,
  Right,
}
//console.log(Direction1.Left); // = 3

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}
// console.log(Direction2.Left);

//--------------------------------------------

// Objects

type User = {
  id: number;
  name: string;
};
const user: User = {
  id: 1,
  name: 'John',
};

//--------------------------------------------

// Type Assertion
let cid: any = 1;
//let customerId = <number>cid
//let customerId = cid as number;

//--------------------------------------------

// Functions

function addNum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  //console.log(message);
}
log('Hello');

//--------------------------------------------

// Interfaces

interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}
const user1: UserInterface = {
  id: 1,
  name: 'John',
};

interface MathFunc {
  (x: number, y: number): number;
}
const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

//--------------------------------------------

// Classes

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person implements PersonInterface {
  public id: number;
  public name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register() {
    return `${this.name} is now registred`;
  }
}

const jim = new Person(1, 'Jim');
const john = new Person(2, 'John');

//--------------------------------------------

//Extended Classes

class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, 'Shawn', 'Developer');

//console.log(emp.register());

//--------------------------------------------

// Generics T = type

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['Jimmy', 'Johnny', 'James']);

numArray.push(1);
strArray.push('Hello')
