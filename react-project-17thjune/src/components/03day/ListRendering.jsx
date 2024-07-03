import React from 'react'
import productList from '../../assets/products'
const ListRendering = () => {
    let products=["product1","product2","product3","product4","product5"]
  return (
   <>
   {/* {products.length==0 && <p>No product found</p>}
    {products.map((product,i)=><h1 key={i}>{product}</h1>)} */}

<table class="table table-bordered table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Image</th>
      <th scope="col">Category</th>
      <th>Price</th>
      <th>stock</th>
    </tr>
  </thead>
  <tbody>
    {productList.length==0 && <tr><td colSpan={6} className='text-center'>No product found</td></tr>}
    {/* {productList.map((item)=>
        <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td><img src={item.image} height={50} width="50px"/></td>
        <td>{item.category}</td>
        <td>{item.price}</td>
        <td>{item.stock}</td>
        </tr>
    )} */}

{productList.map((item)=>{
    return  <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td><img src={item.image} height={50} width="50px"/></td>
        <td>{item.category}</td>
        <td>{item.price}</td>
        <td>{item.stock}</td>
        </tr>
}
    )}
  </tbody>
</table>

   </>
  )
}

export default ListRendering
