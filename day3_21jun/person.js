export default class Person{
    //data member 
    constructor(fn,ln,age){
        this.fname  = fn
        this.lname = ln 
        this.age = age  
    }
    //member function
    display(){
        return `${this.fname} ${this.lname} and age = ${this.age}`
    }
}
// export default Person

//this - pointer , which points to the current object

// let obj = new Person("Ram","Sharma",30)
// let obj1 = new Person("neha","mehta",20)
// console.log(obj.display())
// console.log(obj1.display())