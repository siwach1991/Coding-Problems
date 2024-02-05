const evevn = (async (n)=>{
    return new Promise((resolve,reject)=>{
          if(n%2==0){
            resolve(true);
          }else{
            reject(false);
          }
    })

});

const main =  (async ()=>{
    const result=await evevn(5).catch((err)=>{console.log('error',err)});
    console.log(result);
});
main();
