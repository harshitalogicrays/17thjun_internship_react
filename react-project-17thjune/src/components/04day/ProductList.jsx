import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({products}) => {
  return (
    <div className='container mt-4'>
        {products.length==0 && <h1>No Product found</h1>}
        <div className="row">
              {products.map((product,i)=><ProductCard key={i} product={product}/>)}
        </div>
    </div>
  )
}

export default ProductList
