import React, { useContext } from 'react'
import ProductCard from './ProductCard'
import { MyContext } from './Context'

const ProductList = ({products}) => {
  const data=useContext(MyContext)
  console.log(data)
  return (
    <div className='container mt-4'>
        {products.length==0 && <h1>No Product found</h1>}
        {data.searchval == '' ?  <div className="row">
          {products.map((product,i)=><ProductCard key={i} product={product}/>)}
      </div>
      :
      <>
        {data.filterProducts.length==0 ? <h1>No product found</h1> :
        <div className="row">
        {data.filterProducts.map((product,i)=><ProductCard key={i} product={product}/>)}
    </div>}
      </>
  }
       
    </div>
  )
}

export default ProductList
