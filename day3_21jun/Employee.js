import Person from "./person.js"
class Employee extends Person{
    //Employee is a person 
}

let emp =  new Employee("aaa","bbb",40)
console.log(emp.display())
