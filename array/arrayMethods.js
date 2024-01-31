// map method return a new array after performing a operation on element

let arr =[1,2,3,4,5,6,1];

let map=arr.map((ele)=>{

    return ele*2;
});

console.log(arr);

console.log(map);

//filter method return a new array after filtering or specfied condtion the element

let filter=arr.filter((ele)=>{
    if(ele>5){
        return ele;
    }
});
console.log(filter);

 filter=arr.filter((ele,index)=>{
    return arr.indexOf(ele)===index;
});
console.log(filter);

//reduce v
 let reduce = arr.reduce((acc,ele)=>{
   return acc = acc+ele;
   
 },0);
 console.log(reduce);

 //splice is use for add or delete element in array 

 arr.splice(0,1); //remove 0 index 1 Element
 console.log(arr);


 //slice is use for create new arrya from exiting array without change 
 let newarr =arr.slice(0,3);
 console.log(newarr);
 