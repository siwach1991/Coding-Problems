//Shallow copy

let obj={
    "name":"ankit siwach",
    "age":"32",
    "hieght":"6 Feet"
};
let obj1 = obj;

console.log('before modification both object');

console.log("object 1" , obj);

console.log("object 2 " , obj1);

obj1.name="shikha";

console.log('after modification in copy object');

console.log("object 1" , obj);

console.log("object 2 " , obj1);



//deep copy

let obj2={
    "name":"ankit siwach",
    "age":"32",
    "hieght":"6 Feet"
};
let obj3 = JSON.parse(JSON.stringify(obj2));

console.log('before modification both object');

console.log("object 1" , obj2);

console.log("object 2 " , obj3);

obj2.name="shikha";

console.log('after modification in copy object');

console.log("object 1" , obj2);

console.log("object 2 " , obj3);

