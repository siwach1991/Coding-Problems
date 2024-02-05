/*
// merge the two sorted array, the resultant array should be sorted in ascending order
// expected op = [1,4,5,5,12,13,14,15]
// Time Complexity = O(n)
// n is the length of longest array
*/

let arr1 = [1, 5, 12];
let arr2 = [4, 5, 13, 14, 15];
let arr3 = []

while(arr1.length>0 && arr2.length>0){
    if(arr1[0]<arr2[0]){
         arr3.push(arr1.shift());
    }else if(arr1[0]>arr2[0]){
        arr3.push(arr2.shift());
    }else{
        arr3.push(arr1.shift());
        arr3.push(arr2.shift());
    }
}
console.log([...arr3,...arr1,...arr2])
