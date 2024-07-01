//object literal 
// let student  = {fname:'ram',lname:'sharma',age:20,isMarried:true}
// console.log(student)
// console.log(student.fname)
// console.log(student.age)


// =======enhanced object literal=================
/*let email = "ram@gmail.com"
let password="ram123"
let a=10
// let login={email:email,password:password}
let login={email,password,age:a} //when key and value have same name, then no need to specify value(enhanced object literal)
console.log(login) */

// =========== destructuring object =====================
/*let student  = {fname:'ram',lname:'sharma',age:20,isMarried:true}
// console.log(student.fname)
// let {fname,lname} = student
// console.log(fname)

let {fname:fn,lname} = student
console.log(fn) */

// ==================spread operator =====================================
//spread operator (...) => object /array > indi.

let student  = {fname:'ram',lname:'sharma',age:20,isMarried:true}
// let employee = student  // both student and employee are pointing to same memory
let employee={...student} // {fname:'ram',lname:'sharma',age:20,,isMarried:true}
employee.isMarried = false //// {fname:'ram',lname:'sharma',age:20,,isMarried:false}
console.log(`student object`,student)
console.log(`employee object` , employee)

let person = {...student , age:30}