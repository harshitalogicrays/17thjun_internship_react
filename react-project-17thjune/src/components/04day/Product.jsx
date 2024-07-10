import React from 'react'
import products from '../../assets/products'
import ProductList from './ProductList'
const Product = () => {
    console.log(products)
  return (
   <>
    <ProductList products={products}/>
   </>
  )
}

export default Product
