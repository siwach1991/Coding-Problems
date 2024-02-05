const check = (async (n)=>{
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            resolve('resolve');
         },1000)
    })

});

const main =  (async ()=>{
   
    for(let i=0;i<5;i++){
        const result=await check(5);
        console.log(result);
    }
    console.log('hi');
    
    
});
main();
