#c48838bd

/*
 * ============================================================
 * JAVASCRIPT SYNTAX COLOR TEST
 * ============================================================
 * Archivo diseñado para probar los diferentes tokens de
 * coloreado de sintaxis en Visual Studio Code.
 * ============================================================
 */


// ============================================================
// Comments
// ============================================================

// Comentario de una línea

/*
 * Comentario multilínea
 *
 * TODO: revisar esta función
 * FIXME: corregir este comportamiento
 * NOTE: información importante
 */


// ============================================================
// Keywords
// ============================================================

const keywordExample = true;

let variableExample = 10;

var oldVariable = 20;

if (keywordExample) {
    console.log("if");
} else {
    console.log("else");
}


// ============================================================
// Control Flow
// ============================================================

if (variableExample > 10) {
    console.log("greater");
} else if (variableExample === 10) {
    console.log("equal");
} else {
    console.log("less");
}


for (let i = 0; i < 10; i++) {
    console.log(i);
}


for (const item of ["JavaScript", "Python", "Java"]) {
    console.log(item);
}


for (const key in { name: "Manu", age: 30 }) {
    console.log(key);
}


let counter = 0;

while (counter < 5) {
    counter++;
}


do {
    counter--;
} while (counter > 0);


switch (variableExample) {
    case 10:
        console.log("Ten");
        break;

    case 20:
        console.log("Twenty");
        break;

    default:
        console.log("Other");
}


// ============================================================
// Strings
// ============================================================

const singleString = 'Hello World';

const doubleString = "Hello World";

const multilineString = "Line 1\nLine 2";

const escapedString = "He said: \"Hello\"";

const singleEscapedString = 'It\'s JavaScript';


// ============================================================
// Template Literals
// ============================================================

const name = "Manu";

const age = 30;

const templateString = `Hello ${name}`;

const templateExpression = `Age: ${age}`;

const templateCalculation = `Result: ${10 + 20}`;

const templateMethod = `Name: ${name.toUpperCase()}`;

const templateConditional = `
    Status: ${age >= 18 ? "adult" : "minor"}
`;


// ============================================================
// Template Expression Punctuation
// ============================================================

const expression = `${name}`;

const expressionCalculation = `${10 * 5 + 2}`;

const expressionProperty = `${user.name}`;

const expressionFunction = `${calculateSum(10, 20)}`;

const expressionConditional = `${
    age >= 18 ? "adult" : "minor"
}`;


// ============================================================
// Numbers
// ============================================================

const integer = 123;

const negativeNumber = -123;

const decimal = 123.456;

const scientific = 1.23e10;

const hexadecimal = 0xFF;

const binary = 0b101010;

const octal = 0o755;

const bigNumber = 12345678901234567890n;

const separatorNumber = 1_000_000;


// ============================================================
// Language Constants
// ============================================================

const trueValue = true;

const falseValue = false;

const nullValue = null;

const undefinedValue = undefined;

const nanValue = NaN;

const infinityValue = Infinity;


// ============================================================
// Escape Characters
// ============================================================

const newline = "Line 1\nLine 2";

const tab = "Column 1\tColumn 2";

const carriageReturn = "Text\r";

const backslash = "C:\\Users\\Manu";

const quote = "\"Hello\"";

const singleQuote = '\'Hello\'';

const unicode = "\u00A9";

const hexadecimalEscape = "\x41";


// ============================================================
// Function Declarations
// ============================================================

function helloWorld() {
    return "Hello World";
}


function calculateSum(a, b) {
    return a + b;
}


function processUser(
    username,
    age,
    active = true
) {
    return {
        username,
        age,
        active
    };
}


// ============================================================
// Function Parameters
// ============================================================

function parametersExample(
    requiredParameter,
    defaultParameter = 10,
    ...restParameters
) {
    return requiredParameter;
}


function destructuringParameters(
    { name, age },
    [first, second]
) {
    return {
        name,
        age,
        first,
        second
    };
}


// ============================================================
// Function Calls
// ============================================================

helloWorld();

calculateSum(10, 20);

processUser(
    "Manu",
    30
);

console.log("Hello World");

Math.max(10, 20, 30);

JSON.stringify({
    name: "Manu"
});


// ============================================================
// Arrow Functions
// ============================================================

const add = (a, b) => {
    return a + b;
};


const multiply = (a, b) => a * b;


const greet = name => `Hello ${name}`;


const getUser = () => ({
    id: 1,
    name: "Manu"
});


// ============================================================
// Classes & Types
// ============================================================

class User {

    constructor(id, username) {
        this.id = id;
        this.username = username;
    }

    getUsername() {
        return this.username;
    }

    toString() {
        return `User: ${this.username}`;
    }
}


// ============================================================
// Class Inheritance
// ============================================================

class Admin extends User {

    constructor(id, username, permissions) {

        super(id, username);

        this.permissions = permissions;
    }

    hasPermission(permission) {
        return this.permissions.includes(permission);
    }
}


// ============================================================
// Static Members
// ============================================================

class Configuration {

    static VERSION = "1.0.0";

    static MAX_USERS = 100;

    static getVersion() {
        return Configuration.VERSION;
    }
}


// ============================================================
// Variables
// ============================================================

let username = "Manu";

let currentAge = 30;

let active = true;

let data = null;

let result;

let object = {};

let array = [];


// ============================================================
// Constants
// ============================================================

const MAX_VALUE = 100;

const MIN_VALUE = 0;

const API_VERSION = "v1";

const DEFAULT_TIMEOUT = 3000;

const APPLICATION_NAME = "Color Test";


// ============================================================
// Object Properties
// ============================================================

const user = {
    id: 1,
    name: "Manu",
    age: 30,
    active: true
};


user.name;

user.age;

user.active;

user["name"];


// ============================================================
// Object Keys
// ============================================================

const objectWithKeys = {
    id: 1,
    name: "Manu",
    email: "manu@example.com",
    active: true,

    address: {
        street: "Main Street",
        city: "Madrid",
        country: "Spain"
    }
};


// ============================================================
// Computed Object Keys
// ============================================================

const propertyName = "username";

const computedObject = {
    [propertyName]: "Manu",

    [`user_${propertyName}`]: "value"
};


// ============================================================
// Destructuring
// ============================================================

const {
    id,
    name: userName,
    age: userAge
} = user;


const [first, second, third] = [
    "one",
    "two",
    "three"
];


// ============================================================
// Operators
// ============================================================

const addition = 10 + 5;

const subtraction = 10 - 5;

const multiplication = 10 * 5;

const division = 10 / 5;

const remainder = 10 % 3;

const exponentiation = 2 ** 3;


const equal = 10 == "10";

const strictEqual = 10 === 10;

const notEqual = 10 != 5;

const strictNotEqual = 10 !== 5;

const greater = 10 > 5;

const less = 5 < 10;

const greaterEqual = 10 >= 10;

const lessEqual = 5 <= 10;


const logicalAnd = true && true;

const logicalOr = true || false;

const logicalNot = !true;


const nullish = null ?? "default";

const optional = user?.address?.city;


// ============================================================
// Assignment Operators
// ============================================================

let value = 10;

value += 5;

value -= 2;

value *= 3;

value /= 2;

value %= 3;

value **= 2;

value ??= 100;

value ||= 50;

value &&= 20;


// ============================================================
// Increment / Decrement
// ============================================================

let number = 0;

number++;

number--;

++number;

--number;


// ============================================================
// Ternary Operator
// ============================================================

const status = active
    ? "ACTIVE"
    : "INACTIVE";


// ============================================================
// Punctuation & Brackets
// ============================================================

const punctuation = {
    array: [
        1,
        2,
        3
    ],

    object: {
        key: "value"
    },

    function: calculateSum(
        10,
        20
    )
};


// ============================================================
// Arrays
// ============================================================

const languages = [
    "JavaScript",
    "Python",
    "Java",
    "TypeScript"
];


languages.push("C#");

languages.pop();

languages.map(
    language => language.toUpperCase()
);

languages.filter(
    language => language.length > 5
);

languages.forEach(
    language => console.log(language)
);


// ============================================================
// Spread Operator
// ============================================================

const numbers = [1, 2, 3];

const moreNumbers = [
    ...numbers,
    4,
    5
];


const originalUser = {
    name: "Manu",
    age: 30
};


const copiedUser = {
    ...originalUser,
    active: true
};


// ============================================================
// Rest Operator
// ============================================================

function sumAll(first, ...numbers) {

    return numbers.reduce(
        (total, number) => total + number,
        first
    );
}


// ============================================================
// Regular Expressions
// ============================================================

const regex = /^[a-zA-Z0-9_]+$/;

const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const match = "Manu123".match(regex);

const validEmail =
    "manu@example.com".match(emailRegex);


// ============================================================
// RegExp Constructor
// ============================================================

const dynamicRegex = new RegExp(
    "^[a-zA-Z0-9]+$"
);


// ============================================================
// Error Handling
// ============================================================

try {

    const parsed = JSON.parse(
        '{"name":"Manu"}'
    );

    console.log(parsed);

} catch (error) {

    console.error(error);

} finally {

    console.log("Finished");
}


// ============================================================
// Throw
// ============================================================

function validateAge(age) {

    if (age < 0) {

        throw new Error(
            "Age cannot be negative"
        );
    }

    return true;
}


// ============================================================
// Async / Await
// ============================================================

async function fetchData() {

    const response = await fetch(
        "https://example.com/api"
    );

    const data = await response.json();

    return data;
}


async function loadData() {

    try {

        const data = await fetchData();

        console.log(data);

    } catch (error) {

        console.error(error);
    }
}


// ============================================================
// Promise
// ============================================================

const promise = new Promise(
    (resolve, reject) => {

        const success = true;

        if (success) {
            resolve("Success");
        } else {
            reject(
                new Error("Failed")
            );
        }
    }
);


promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log("Finished");
    });


// ============================================================
// Modules
// ============================================================

import fs from "fs";

import path from "path";

import {
    readFile,
    writeFile
} from "fs/promises";


// ============================================================
// Export
// ============================================================

export function exportedFunction() {

    return "Exported";
}


export const exportedConstant = 100;


export default class ExportedClass {

    run() {
        return true;
    }
}


// ============================================================
// Namespaces & Modules
// ============================================================

// JavaScript no tiene namespaces clásicos como C#.
// Los módulos ES (`import` / `export`) cumplen una
// función equivalente de organización.


const modulePath = path.join(
    "C:",
    "Users",
    "Manu"
);


// ============================================================
// Decorators & Annotations
// ============================================================

// Los decorators dependen de la versión/configuración
// de JavaScript y del runtime/transpilador.
//
// @decorator
// class Example {}


// ============================================================
// Getter / Setter
// ============================================================

class Person {

    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}


// ============================================================
// Private Properties
// ============================================================

class BankAccount {

    #balance = 0;

    deposit(amount) {

        this.#balance += amount;
    }

    getBalance() {

        return this.#balance;
    }
}


// ============================================================
// Symbols
// ============================================================

const symbol = Symbol("id");

const objectWithSymbol = {

    [symbol]: 123
};


// ============================================================
// Map / Set
// ============================================================

const map = new Map();

map.set("name", "Manu");

map.set("age", 30);


const set = new Set([
    "JavaScript",
    "Python",
    "Java"
]);


// ============================================================
// BigInt
// ============================================================

const bigInteger = 123456789012345678901234567890n;

const anotherBigInteger = BigInt(
    "12345678901234567890"
);


// ============================================================
// Optional Chaining
// ============================================================

const city =
    user?.address?.city;

const methodResult =
    user?.getUsername?.();


// ============================================================
// Nullish Coalescing
// ============================================================

const displayName =
    userName ?? "Unknown";


// ============================================================
// Invalid / Deprecated
// ============================================================

// Código inválido intencionadamente comentado:
//
// const invalid =
//
// function invalidFunction(
//
// if true
//
// const x = {;
//
//
// Deprecated:
//
// escape("hello");
//
// unescape("hello");


// ============================================================
// HTML / XML Tags
// ============================================================

// Estas etiquetas NO forman parte de JavaScript puro.
// Se incluyen únicamente para probar si el tema/gramática
// está mezclando HTML con JavaScript.

/*
<div class="container">
    <span id="title">Hello</span>
</div>
*/


// ============================================================
// Attributes
// ============================================================

// Tampoco son elementos propios de JavaScript.
//
// class="container"
// id="title"
// data-value="123"


// ============================================================
// CSS Properties
// ============================================================

// No son tokens propios de JavaScript.
//
// color: red;
// background-color: blue;
// font-size: 16px;


// ============================================================
// JSX / TSX Components
// ============================================================

// JSX no es JavaScript estándar, pero es habitual en
// archivos .jsx / .tsx.

/*
const component = (
    <User
        name="Manu"
        age={30}
    />
);
*/


// ============================================================
// Main
// ============================================================

function main() {

    const testUser = new User(
        1,
        "Manu"
    );

    console.log(
        testUser.getUsername()
    );

    console.log(
        calculateSum(
            10,
            20
        )
    );
}


main();