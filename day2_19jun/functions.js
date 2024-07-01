let str="LRA"  //global variable
// function fun(){
//     let a=5,b=2 //local variable 
//     // console.log("str= " + str + " and "+ (a+b))
//     console.log(`str= ${str} and ${a+b} `)
// }

// fun()

// function fun1(a,b){ //a=5,b=2
//     console.log(`str= ${str} and ${a+b} `)
// }

// fun1(5,2)

// function fun1(a,b){ 
//    return a+b
// }

// let result = fun1(5,12)
// console.log(result)

//function expression 
// let fun = function(){ //anonymous function
//     let a=5,b=9
//     console.log(`str= ${str} and ${a+b} `) 
// }
// fun()

// let fun1 = function(n1,n2){
//     return n1+n2
// }
// console.log(fun1(2,3))

//ES6 - arrow function
// let fun = ()=>{
//     let a=5,b=9
//     console.log(`str= ${str} and ${a+b} `) 
// }
// fun()

let fun1 = (n1,n2)=>n1+n2
console.log(fun1(2,3))