// math function basic

let value1 = Math.random();
console.log(value1);

let value2 = Math.floor(Math.random() * 5);
console.log(value2);

let value3 = Math.ceil(Math.random() * 4);
console.log(value3);

if(value2 == value3){
    console.log("they both are same!");
}else{
    console.log("try again!");
}

/* 
    output :
    0.17191920427103047
    3
    3
    they both are same!
*/