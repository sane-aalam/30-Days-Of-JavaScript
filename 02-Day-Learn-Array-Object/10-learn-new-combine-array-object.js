// create an object
const myobject = {
    first_name : "sane",
    last_name : "aalam",
    salary : "1Lakh",
    male : true,
    college_name : "ITT kanpur", // just for fun
    mood : "happy",
    list : [11,13,14,10,1222]
};

console.log(myobject);

// array element print
console.log("\n")
console.log(myobject.list);

// change the value of the array
console.log("after the changing the value of array \n")
myobject.list[0] = 112;
myobject.list[1] = 113;
myobject.list[2] = 114;
myobject.list[3] = 115;
myobject.list[4] = 116;
console.log(myobject.list);
