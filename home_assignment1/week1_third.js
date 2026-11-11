// Example 1: Declaring variables
var a= 10;// using var older way
let b = 20;               // using let modern way for value that can change 
const c = 30;  // using const modern way values will constant/fixed(will be used when values should nerver change)
console.log(a);
console.log(b);
console.log(c);
 
// Example 2: redeclaring Variables
var a = 10;
var a = 20 //redeclaring Allowed with 'var'
console.log(a);
//let score=10;
//let score=20; //Error! Cannot re-declare a 'let' variable in the same scope
//const amount = 345 ;
//const amount = 768 ; // Error! Cannot re-declare a 'const' variable

// Example 3: Re-assigning values
var a = 20;
a = 60; // Allowed! 'var' can be re-assigned
console.log(a); // Output: 60

let d = 20;
d = 30; // Allowed! 'let' can be re-assigned
console.log(d); // Output: 120

//const e = 30;
//e = 40 // Error! TypeError: Assignment to constant variable.

// Example 4: Block Scope

{ var x = 1; 
    let y = 2; 
    const z = 3; }
console.log(x);  //x (Leaked out of the block!)
//conole.log(y);   // y Error! blockLet is not defined outside the block
//console.log(z);  // z Error! blockConst is not defined outside the block

//Example 5: Hoisting
console.log(hoist); 
var hoist = 10;
console.log(j); 
let j = 20;
