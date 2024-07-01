let arr = [3,4,54,2,2,12]
// console.log(arr) 
// console.log(arr[0]) 
// arr[0]=1
// console.log(arr) 
// console.log(arr.length) //6 length 0 to 5 index
// for(let i=0;i<arr.length;i++){//0<6(t),1,2,3,4,5,6<6(F)
//     console.log(arr[i]) //arr[0] ,arr[1],arr[2],arr[3],arr[4],arr[5]
// }

//function - forEach() 
// arr.forEach((item,i)=>{console.log(`index=${i} and value=${item}`)})

// let arr1 = arr.map((item)=>{ return item+2})
// let arr1 = arr.map((item)=>{ return Math.sqrt(item)})
// let arr1 = arr.map((item)=>{ return Math.pow(item,3)})
// let arr1 = arr.map((item)=>{ return `hello ${item}`})
// console.log(arr)
// console.log(arr1)

// let arr1 = arr.filter((item)=>{ return item>3})
// let arr1 = arr.filter((item)=>item>3)
// console.log(arr)
// console.log(arr1)

// let finditem = arr.find((val)=>val==121) // if exist return value otherwise undefined
// console.log(finditem)

// let finditemindex = arr.findIndex((val)=>val==121) // if exist return index no otherwise -1
// console.log(finditemindex)

let total = arr.reduce((pre,cur)=>pre+cur)
console.log(total)

// 3,4,54,2,2,12
// prev=3,cur=4 => 7 
// prev=7 , cur = 54 => 61
// prev=61 , cur = 2 = 63
// prev=63, cur=2 = 65
// prev= 65, cur=12 => 77

// let t =0
// for(let i=2;i<arr.length;i++){
//     t=t+arr[i]
// }
// console.log(t)