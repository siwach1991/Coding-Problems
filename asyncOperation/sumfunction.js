function sum(a,b){
    if(b!=''){
        return a+b;
    }else{
        return function(b) { return a + b; };
    }
}

//console.log(sum(1,2));
console.log(sum(1),(2));
