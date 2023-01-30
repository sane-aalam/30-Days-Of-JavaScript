// create an object
const myobject = {
    first_name : "sane",
    last_name : "aalam",
    salary : "1Lakh",
    male : true,
    college_name : "ITT kanpur", // just for fun
    mood : "happy"
};

console.log(myobject);

console.log("\n");
// you can print the using key : value
console.log(myobject.first_name);
console.log(myobject.last_name);
console.log(myobject.college_name);
console.log(myobject.mood);

// you can modify the value using key

myobject.mood = "sad"; // always good like Ms dhoni
console.log(myobject.mood);

if(myobject.mood == "sad"){
    myobject.mood = "cool!";
    console.log(myobject.mood);
}

console.log("\n");
if(myobject.first_name && myobject.last_name){
    console.log("you can enter the college");
}


console.log("\n"); // just abhi knew - it for new line 

console.log("Final print the object");
console.log(myobject);


