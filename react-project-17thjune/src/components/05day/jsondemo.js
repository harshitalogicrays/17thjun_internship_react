
let user = {fname:"Ram",
    lname:"sharma",
    age:20,
    isMarried:false,
    isACtive:null,   
    hobbies:["dance","music","badminton",'cricket'],
    address:{city:'ahmedabad',state:"gujrat",country:"india",
        company:{title:"LRA",location:"Safal pegasus"}
    }
}
console.log(user)
let str = JSON.stringify(user)
console.log(str)
let obj = JSON.parse(str)
console.log(obj)