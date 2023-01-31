

// --------Arrow functions--------

// ES6 introduced a new and shorter way of declaring 
// an anonymous function, which is known as Arrow Functions. 
// In an Arrow function, everything remains the same, except 
// here we don’t need the function keyword also. Here, 
// we define the function by a single parenthesis and then ‘=>’ 
// followed by the function body.

// simple structure
const myFunction = () => {
    console.log("hello world");
}

myFunction();

// return value
const myFunction1 = () => {
    return 100 + 11;
}
console.log(myFunction1());

// hard level 

let greet = () => console.log("Welcome to Github");
greet();