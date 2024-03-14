const sum1 =(arr,target)=>{
   let left=0;
   let result=[];
   let right=arr.length-1;
   let sum=0;
   while(left<right){
    sum=arr[left]+arr[right];
      if(sum==target){
        return ([arr[left],arr[right]])

      }else if(sum>0){
        right--;
      }else{
        left++;
      }
   }
  
}

let arr=[-5,-4,-3,-2,0,2,4,6,8];
let target=0;
console.log(sum1(arr,target));

let arr1=[2,7,11,15];
let target1=9;
console.log(sum1(arr1,target1));