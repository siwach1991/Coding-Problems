const input = [2,1,3,4,8,9,7,5];
console.log(nextLargest(input));
function nextLargest(arr){
let max=arr[0],second;
for(let i=1;i<arr.length;i++){
    if(max<arr[i]){
    second=max;
        max=arr[i];
        
    }

}
return second;
}
