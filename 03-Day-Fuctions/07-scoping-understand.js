
// global & local scoping - read google deeply simple(hay)

// if we are using "var", it will change orginal value

var a = 30;

if(true){
    var a = 20;
    console.log(a);
}
console.log(a);
console.log("\n")


// if we are using "let", it will not change orginal value

let b = 30;

if(true){
    let b = 20;
    console.log(b);
}
console.log(b);
console.log("\n")

// if we are using "const", it wil not change orginal value
const c = 11;

if(true){
    const c = 12;
    console.log(c);
}
console.log(c);
