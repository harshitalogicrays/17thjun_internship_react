import React, { useContext } from 'react'
import { MyContext } from './Context'

const ProductCard = ({product}) => {
  const data = useContext(MyContext)
  let handleCart=()=>{
    data.addcart(product)
  } 
  return (
    <div className='col-3'>
        <div class="card">
            <img class="card-img-top" src={product.image} alt={product.name} height={180} />
            <div class="card-body">
                <h4 class="card-title">{product.category}</h4>
                <h6 class="card-title">{product.type}</h6>
                <h4 class="card-title">{product.name}</h4>
                <p class="card-text">${product.price}</p>
                <p class="card-text">Available: {product.stock}</p>
                <button type="button"  class="btn btn-danger" onClick={handleCart}> Add to Cart </button>
            </div>
          
            
        </div>
        
    </div>
  )
}

export default ProductCard
