//Step 1 
let someMonth;
function theMonth() {}
let currentMonth;
let summerMonth;
let myLibraryFunction;

//Step 2 
let num = 42;  // numeric
let str = "Hello Word!" // String 
let boolLiteral = true; // Boolean 
let nullLiteral = null; // Null

// Step 3 
let complexVarExpr = 3 + 6
let complexVarExpr2 = complexVarExpr / 3

// Step 4 
let strFirstName;
let strLastName;
let strAddress;
let strCity;
let strState;
let intZipCode;
let intYourAge;
let strReferralSource;
let boolMayWeContactYou;

// Step 5  (Commented out due to error/warning from re-declaration)

//1 
//let strFirstName;
//strFirstName = "John";

//2 
//let intYourAge = 30;

//3 
//let strCity = "New York", strState = "NY", intZipCode = 10001;

// Step 6 
let result = 8 + "something"; 
document.write(result);

//Step 7 
let result1 = true + " is a Boolean value";
document.write(result1); // Output: "true is a Boolean value"

// Second variable: Adding a Number and a Boolean
let result2 = 10 + true;
console.log(result2); // Output: 11

// Step 8 
/*
No, 

let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."'

string literal is not valid because it contains an unescaped apostrophe (I'm), 
which causes a syntax error in JavaScript. Since the string is enclosed in single quotes ('),
the apostrophe inside the string prematurely terminates it.

*/
//Corrected
let someString = "Who once said, \"Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.\"";
console.log(someString);

//Step 9 
let nullVar = null;
console.log(nullVar); // Output: null

let undefinedVar;
console.log(undefinedVar); // Output: undefined


// Step 10
// String literal
console.log(typeof "Hello, world!"); // Output: string

// Number literal
console.log(typeof 42); // Output: number

// Boolean literal
console.log(typeof true); // Output: boolean

// Object literal (null is considered an object in JavaScript)
console.log(typeof null); // Output: object

// Undefined literal
console.log(typeof undefined); // Output: undefined

//Step 11 
alert("Hello " + "Peter" + " " + "Bankole" + ", welcome to the Javascript class!");


// Step 12
let firstName = "Peter";
let lastName = "Bankole";
alert("Hello " + firstName + " " + lastName + ", welcome to the JavaScript class!");

//Step 13 
let courseName = "JavaScript";
alert("Hello " + firstName + " " + lastName + ", welcome to the " + courseName + " class!");

//Step 14
alert("Hello " + firstName + " " + lastName + ".\nWelcome to the " + courseName + " class!");

// Step 15
let yourName = prompt("Please enter your name:");
alert("Hello " + yourName + ", welcome to the " + courseName + " class!");

//Step 16
courseName = prompt ('Please enter course name')
alert("Hello " + yourName + ", welcome to the " + courseName + " class!");

//Step 17 
let x = 10; 
let y = 20;
console.log (x + y);

//Step 18 
x = 20;   //declaration: let x = 20 . Commented out due to error/warning in re-declaration
x = x + 20; 
console.log (x); 

//Step 19
x = 20; // declaration: let x = 20
x = x * 5;  
console.log(x);

//Step 20 
x = 20 % 3;  // declaration: let x = 20 % 3
// Divide 'x' by 1 and assign the result back to 'x'
x /= 1; 
// Display the result in the console
console.log(x);

//Step 21 
let age = 25;
let hasLicense = true;
let isCitizen = true;

// Use Comparison and Logical operators to evaluate a condition
let canVoteAndDrive = (age >= 18 && hasLicense === true && isCitizen === true);
// Display the result in the console
console.log("Can the person vote and drive? " + canVoteAndDrive);

// Step 22 
// Declare variables
let temperature = 80;
let isRaining = false;
let isSnowing = false;

// Use Comparison and Logical operators to evaluate a condition
let shouldGoOut = (temperature < 50 || isRaining !== false || isSnowing);

// Display the result in the console
console.log("Should the person go outside? " + shouldGoOut);