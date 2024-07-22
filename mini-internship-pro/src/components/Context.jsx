import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
export const MyContext=React.createContext()
const Context = ({children}) => {
//products  
  const [products,setProducts]=useState([])
    useEffect(()=>{ getdata()},[])
    let getdata=async()=>{
        try{
        let res= await fetch(`${import.meta.env.VITE_URL}/products`)
        let data =await res.json()
        setProducts(data)
    }
    catch(error){console.log(error)}
  }

    let [cart,setCart]=useState([])
    let [total,setTotal]=useState(0)
    let [filterProducts,setFilterProducts]=useState([])
    let [searchval,setSearchVal]=useState('')
    let addcart=(product)=>{
        if(sessionStorage.getItem("17thjun_project") == null){
            toast.error("please login first")
        }
        else {
            let itemIndex=cart.findIndex(item=>item.id==product.id)
            if(itemIndex ==-1){
                setCart([...cart, {...product,qty:1}])
                toast.success(`${product.name} added to cart`)              
            }
            else {toast.info(`${product.name} already added to cart`)}               
        }
        window.scrollTo(0,0)  
    }
    let increase=(product)=>{
        let itemIndex=cart.findIndex(item=>item.id==product.id)
        if(itemIndex !=-1){
            if(cart[itemIndex].qty < product.stock)
            cart[itemIndex].qty++
            else toast.info(`only ${product.stock} qty available`)
        }
        setCart([...cart])
    }
    let decrease=(product)=>{
        let itemIndex=cart.findIndex(item=>item.id==product.id)
        if(itemIndex !=-1){
            if(cart[itemIndex].qty > 1)
            cart[itemIndex].qty--
            else  cart[itemIndex].qty =1
        }
        setCart([...cart])
    }
    let removefromcart=(id)=>{
        // let itemIndex=cart.findIndex(item=>item.id==id)
        // cart.splice(itemIndex,1)
        // setCart([...cart])
        
        let filters=cart.filter(item=>item.id !=id)
        setCart([...filters])
    }
    let emptycart=()=>{setCart([]);setTotal(0)}
    let calculatetotal=()=>{
        let t = cart.reduce((prev,curr)=>{return prev+(curr.qty*curr.price)},0)
        setTotal(t)
    }

    let filterbysearch=(search)=>{  
        if(search!=''){
           let filters = products.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase()))
           setFilterProducts(filters)
           setSearchVal(search)
        }
        else {
            setFilterProducts(products)
        }
        
    }
  return (
   <>
    <MyContext.Provider value={{cart,total,addcart,increase,decrease,removefromcart,emptycart,calculatetotal,filterbysearch,filterProducts,searchval}}>
        {children}
    </MyContext.Provider>
   </>
  )
}

export default Context
