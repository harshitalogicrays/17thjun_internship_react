function fun(count){
    return new Promise((resolve,reject)=>{
            if(count  <= 10)
                resolve({count:count,str:"Happy"})
            else 
                reject("Something went wrong")
        })
}

function fun1(){
    return Promise.resolve("hello from promise")
}
let  fun2=(str)=>{
    return new Promise((resolve,reject)=>{
        if(str =="Ram")
            resolve(str)
        else 
            reject("Something went wrong")
    })
}
//promise chaining 
fun(1).then((d)=>{ 
    console.log("promise resolved",d)
   return fun1().then((d)=>{ 
        console.log("promise resolved",d)
        return fun2("Ram").then((name)=>{
            console.log(name)
        })
    })
})
 .catch((err)=>{console.log("promise rejected",err)})
 .finally(()=>console.log("final block"))

