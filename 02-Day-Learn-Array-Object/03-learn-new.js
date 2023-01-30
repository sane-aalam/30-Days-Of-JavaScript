let arr = [11,22,14,55,67];
console.log(arr);

// array pre-define method
// 1 push = add the element end of array
arr.push(100);
console.log(arr);

// 2 pop = remove the element end of array
arr.pop();
console.log(arr);

// 3 shift = remove the element start of array
arr.shift();
console.log(arr);

// unshift = add the element of start of array
arr.unshift(11);
console.log(arr);

// output :
/*
[ 11, 22, 14, 55, 67 ] - print noraml array
[ 11, 22, 14, 55, 67, 100 ] - after push
[ 11, 22, 14, 55, 67 ] - after pop
[ 22, 14, 55, 67 ] - after shift
[ 11, 22, 14, 55, 67 ] - after unshift 

*/