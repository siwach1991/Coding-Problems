 let arr1 = [10,20,10,10,30,40,50,3,100]
 let arr2 = [10,50,110,20]
/*// expected op = [true, true, false, true]
// Time Complexity = O(n)
*/
let set = new Set([...arr1]);
let finalarr=[];
arr2.forEach(element => {
    finalarr.push(set.has(element));
});
console.log(finalarr);
