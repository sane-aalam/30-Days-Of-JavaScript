
// var vs let vs const

// you can change the value 
var value = 25;
console.log(value);

if(true){
    value = 34;
    console.log(value);
}

// you can change the value 
let value2 = 25;
console.log(value);

if(true){
    value2 = 34;
    console.log(value2);
}

// in const, you can't change the value, if declare with of const
const value3 = 25;
console.log(value3);

if(true){
    value3 = 34;
    console.log(value3);
}


// mostly in js, nowdays we are using let and const )):