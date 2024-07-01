import prompt from 'prompt'
prompt.start()
prompt.get(['count'],(err,res)=>{
    if(err) throw err
    // console.log(res.count)
    let p = new Promise((resolve,reject)=>{
        if(res.count  <= 10)
            resolve({count:res.count,str:"Happy"})
        else 
            reject("Something went wrong")
    })
    
    //promise consume
    p.then((d)=>{ console.log("promise resolved",d)})
     .catch((err)=>{console.log("promise rejected",err)})
     .finally(()=>console.log("final block"))
})