function outer(a){
    return function inner(){
        return ++a;
    }
}
let fn=outer(1);
console.log(fn());
console.log(fn());
