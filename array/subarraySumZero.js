/*
// Returns true if the array has a subset array whose sum in zero
// else retruns false
// Time Complexity - O(n)
*/
let arr=[4,2,2,-3,5];
let sum=0;
let set = new Set();
arr.forEach((ele)=>{
    sum =sum+ele;
     if(sum==0 || set.has(sum)){
        console.log('sum found');
     }
     set.add(sum);
})
