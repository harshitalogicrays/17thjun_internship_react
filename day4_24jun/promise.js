// //promise create
// let count = 13
// let p = new Promise((resolve,reject)=>{
//     if(count  <= 10)
//         resolve()
//     else 
//         reject()
// })

// //promise consume
// p.then(()=>{ console.log("promise resolved")})
//  .catch(()=>{console.log("promise rejected")})


//promise create
// let count = 3
// let p = new Promise((resolve,reject)=>{
//     if(count  <= 10)
//         resolve(count)
//     else 
//         reject("Something went wrong")
// })

// //promise consume
// p.then((d)=>{ console.log("promise resolved",d)})
//  .catch((err)=>{console.log("promise rejected",err)})

// let count = 3
// let p = new Promise((resolve,reject)=>{
//     if(count  <= 10)
//         resolve({count:count,str:"Happy"})
//     else 
//         reject("Something went wrong")
// })

// //promise consume
// p.then((d)=>{ console.log("promise resolved",d)})
//  .catch((err)=>{console.log("promise rejected",err)})


//  let count = 3
// let p = new Promise((resolve,reject)=>{
//     if(count  <= 10){
//         resolve({count:count,str:"Happy"})
//          resolve("defkjs")
//          resolve("u23u2i3")
//         }
//     else 
//         reject("Something went wrong")
// })

// //promise consume
// p.then((d)=>{ console.log("promise resolved",d)})
//  .catch((err)=>{console.log("promise rejected",err)})

// let count = 13
// let p = new Promise((resolve,reject)=>{
//     if(count  <= 10)
//         resolve({count:count,str:"Happy"})
//     else 
//         reject("Something went wrong")
// })

// //promise consume
// p.then((d)=>{ console.log("promise resolved",d)})
//  .catch((err)=>{console.log("promise rejected",err)})
//  .finally(()=>console.log("final block"))



// function fun(count){
//     return new Promise((resolve,reject)=>{
//             if(count  <= 10)
//                 resolve({count:count,str:"Happy"})
//             else 
//                 reject("Something went wrong")
//         })
// }

// function fun1(){
//     return Promise.resolve("hello from promise")
// }

// fun(13).then((d)=>{ console.log("promise resolved",d)})
//  .catch((err)=>{console.log("promise rejected",err)})
//  .finally(()=>console.log("final block"))

//  fun1().then((d)=>{ console.log("promise resolved",d)})