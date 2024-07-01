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

async function fun3(){}

let fun4=async()=>{
    try{
        let d = await fun(3)
        console.log(d)
        let res = await fun1()
        console.log(res)
        let name = await fun2("Ram")
        console.log(name)
    }
    catch(err){
        console.log("promise rejected",err)
    }
  
}
fun4()