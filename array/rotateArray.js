let arr =[1,2,3,4]; // rotate left by 3

// first [4,1,2,3];
// 2nd [4,3,1,2]
//3rd [4,3,2,1]
let rotate=3;
let temp=0;
for(let i=0;i<rotate;i++){
   
    temp=arr[0];
    arr.splice(0,1);
    arr.splice((arr.length),-1,temp);


}
console.log(arr);
