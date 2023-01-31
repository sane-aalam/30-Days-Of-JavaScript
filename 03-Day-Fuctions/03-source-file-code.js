
// Anonymous Function 
// It is a function that does not have any name associated with it. 
// Normally we use the function keyword before the function name to define a function in JavaScript, 
// however, in anonymous functions in JavaScript, we use only the function keyword without the function name.

// An anonymous function is not accessible after its initial creation, 
//it can only be accessed by a variable it is stored in as a function as a value. 
//An anonymous function can also have multiple arguments, but only one expression.


var greet = function () {
    console.log("Welcome to Sane!");
};
greet();

// with paramter 
var helper = function (platform) {
    console.log("Welcome to ", platform);
};
  
helper("leetcode!");


let myFunction = function(first_name, last_name){
    console.log(`My firstname is ${first_name}, and lastname is ${last_name}`);
}

myFunction("Ran","kUmar");
myFunction("Rina", "kumari");