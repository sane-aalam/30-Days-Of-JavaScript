


const sumOfArray = (arr,size) => {
    let result = 0;
    for(let i = 0; i<size; i++){
        result = result + arr[i];
    }

    return result;
}


let arr = [1,2,3,4,5,6];
console.log(arr); // print the array

let size = arr.length;

let value = sumOfArray(arr,size);

console.log(value);