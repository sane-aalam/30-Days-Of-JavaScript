
const LinearSearch = (arr,size) => {

    for(let index = 0; index<size; index++){
        if(arr[index] == target){
            return index;
        }
    }
    // else element is not present
    return -1;
}

// first array and search an element
let arr1 = [1,2,3,4,0,22];
let target = 22;

let answer1 = LinearSearch(arr1,target);
console.log(answer1);

// second array and search an element
let arr2 = [1,1];
let target2 = 1111;

let answer2 = LinearSearch(arr2,target2);
console.log(answer2);