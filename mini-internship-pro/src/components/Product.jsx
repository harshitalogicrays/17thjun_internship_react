import React, { useContext, useEffect, useState } from 'react'
import ProductList from './ProductList'
import { MyContext } from './Context'
const Product = () => {
  const [products,setProducts]=useState([])
  useEffect(()=>{ getdata() },[])

  let getdata=async()=>{
    try{
      let res= await fetch(`${import.meta.env.VITE_URL}/products`)
      let data =await res.json()
      setProducts(data)
   }
  catch(error){console.log(error)}
  }
  return (
   <>
    <ProductList products={products}/>
   </>
  )
}

export default Product
