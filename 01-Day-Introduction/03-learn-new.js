
//1 how to convert lower case and upper case 

let user_name = "Alex Elon";
console.log(user_name);

user_name = user_name.toLowerCase();
console.log(user_name);
user_name = user_name.toUpperCase();
console.log(user_name);

//2 find out the length of string
console.log(user_name.length);

//3 print the string using loop - for loop

const size = user_name.length; // find out the length of string 

for(let i = 0; i<size; i++){
    console.log(user_name[i]);
}

