// function fun(){
//     console.log("hello")
// }

// fun() // hello
// fun(2,3) // hello
// fun(4) // hello

// function fun(a,b){
//     console.log(a+b)
// }

// fun(2,3) //a=2,b=3 => 5
// fun(4) // a=4 , b=undefined => NaN (not a number)
// fun() // a= undefiend , b=undefined => NaN

// function fun(a=0,b=1){
//     console.log(a+b)
// }

// fun(2,3) //a=2,b=3 => 5
// fun(4) // a=4 , b=1 => 5
// fun() // a= 0 , b=1 => 1


//indi. -> group as an array
function fun(a,b,...c){ //...rest parameter c=[8,9,4,2,3]
    console.log(a,b,c)
}

fun(2,3,8,9,4,2,3)

//...spread operator - arr/object - indi.
let arr = [4,5,6]
// let arr1 = [5,9,arr,2] // [5,9,[4,5,6],2]
let arr1 = [5,9,...arr,2] // [5,9,4,5,6,2]