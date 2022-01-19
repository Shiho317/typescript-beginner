let hello: string = 'hello';
console.log(hello);

// function add(a: number, b:number): number {
//   return a + b;
// }
//a is number, b is nummber, return is number

//type anotation
let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

//type inference
// let hasValue = true;
// let count = 10;
// let float = 3.14;
// let negative = -0.12;
// let single = 'hello';
// let double = "hello";
// let back = `hello`;

const person: {
  name: string;
  age: number;
} = {
  name: 'Jack',
  age: 21
}

console.log(person.name);
console.log(person.age);

const fruits: string[] = ['Apple', 'Banana', 'Grape']
//fruits array is string

const fruit: any[] = ['Apple', 'Banana', 'Grape', 1]
//fruits array can be used any types

const book: [string, number, boolean] = ['buisiness', 1500, false];
//tuple -- define each data types
book.push(21);
//tuple can push to array

// const CoffeeSize = {
//   SHORT: 'SHORT',
//   TALL: 'TALL',
//   GRANDE: 'GRANDE',
//   VENTI: 'VENTI'
// }

// const coffee = {
//   hot: true, //boolean
//   size: CoffeeSize.TALL //string
// }
// in this object, size can be choosed from only 4 options

enum CoffeeSize {
  SHORT = 'SHORT', //SHORT = 0
  TALL = 'TALL', //TALL = 1
  GRANDE = 'GRANDE', //GRANDE = 2
  VENTI = 'VENTI' //VENTI = 3
}

const coffee = {
  hot: true, 
  size: CoffeeSize.TALL
}
coffee.size = CoffeeSize.SHORT;

let anything: any = true;
anything = 'hello';
anything = ['hello', 23, true];
anything = {};
anything.fjiafjaj = 'faijfi';

let banana = 'banana';
banana = anything;
//if there is type any, typescript allow to put anything (same as js)

let unionType: number | string = 10; //number
unionType = 'hello'; //string
unionType.toUpperCase();
//accept multiple type

let unionTypeArray: (number | string)[] = [21, 'hello'];

const apple: 'apple' = 'apple'; //type literal
// accept only specific value
// for type literal, need to use const

//union + literal == enum
// let clothSize: 'small' | 'medium' | 'large' = 'medium';
// const cloth = {
//   color: 'white',
//   size: clothSize //large
// }
//* Can not change size

const cloth: {
  color: string;
  size: 'small' | 'medium' | 'large'
} = {
  color: 'white',
  size: 'medium'
}
cloth.size = 'large';
//* Can Change size

//type alias
type ClothAliasSize = 'small' | 'medium' | 'large' 
let clothAliasSize: ClothAliasSize = 'medium';
const clothAlias: {
  color: string;
  size: ClothAliasSize
} = {
  color: 'white',
  size: 'medium'
}


function add(num1: number, num2: number): number {
  return num1 + num2
}

//type void
function sayHello(): void { //return nothing
  console.log('Hello'); 
}
console.log(sayHello()); //undefined

//type undefined
// let tmpUndefined: undefined = undefined;
let tmpUndefined: undefined = null;

//type null
// let tmpNull: null = null;
let tmpNull: null = undefined;

const anotherAdd: (n1: number, n2: number) => number = add;

// const anotherAdd: (n1: number, n2: number) => number = function (num1: number, num2: number): number {
//   return num1 + num2
// };

const doubleNumber: (num: number) => number = num => num * 2;


//define type for callback function

function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num * 2)
  console.log(doubleNum * 2);
}
doubleAndHandle(21, doubleNum => {
  return doubleNum
});

//type Unknown (similar to any)
let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
text = anyInput;
//text = unknownInput -- error
if(typeof unknownInput === 'string'){
  text = unknownInput
};
// you can use any type but you should galant

//type never
function error(message: string): never {
  throw new Error(message);
};
console.log(error('This is an error'));
//never return anything