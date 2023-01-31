

// task - 02) understand default parameter

console.log("\n")

function printIntro(name, data, job = "SDE") {
    console.log(`My Name is ${name}, I’m currently learning ${data}, looking ${job} role`);
    console.log("\n");
}

printIntro("Sane", "Javascript");
printIntro("Jane", "react js");

printIntro("Sany", "Java lang");
printIntro("Jany Kishan", "C++");

printIntro("Ram", "Node");
printIntro("Sita", "Jsx");


// here we can clear see, job default parameter 

/*  output:

My Name is Sane, I’m currently learning Javascript, looking SDE role

My Name is Jane, I’m currently learning react js, looking SDE role 

My Name is Sany, I’m currently learning Java lang, looking SDE role

My Name is Jany Kishan, I’m currently learning C++, looking SDE role

My Name is Ram, I’m currently learning Node, looking SDE role      

My Name is Sita, I’m currently learning Jsx, looking SDE role     


*/