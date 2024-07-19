import React, { useEffect, useState } from 'react'
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const ViewProduct = () => {
  const [products,setProducts]=useState([])
  useEffect(()=>{
      getdata()
  },[])

  let getdata=async()=>{
    try{
      let res= await fetch(`${import.meta.env.VITE_URL}/products`)
      let data =await res.json()
      setProducts(data)
   }
  catch(error){console.log(error)}
  }

  let handleDelete=async(id)=>{
    if(window.confirm("are you sure to delete this??")){
      try{
        await fetch(`${import.meta.env.VITE_URL}/products/${id}`,{
            method:"DELETE"
        })
        toast.success("product deleted")
        getdata() }
    catch(error){console.log(error)}
    }
  }
  return (
    <div className="container mt-4 ">
    <div className='card shadow'>
        <div className="card-header">
            <h1>View Products
            <Link type="button" class="btn btn-danger float-end btn-lg" to='/admin/add/product'>Add Product</Link>      </h1>
        </div>
        <div className="card-body">
            <div  class="table-responsive"  >
              <table class="table table-bordered table-striped table-hover"  >
                <thead>
                  <tr>
                    <th scope="col">Sr. No</th>
                    <th scope="col">Category</th>
                    <th scope="col">Type</th>
                    <th>Name</th>
                    <th>image</th>
                    <th>price</th>
                    <th>stock</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.length==0 && <tr><td colspan="8">No product found</td></tr>}
                  {products.map((product,i)=>
                  <tr key={product.id}>
                    <td>{i+1}</td>
                    <td>{product.category}</td>
                    <td>{product.type}</td>
                   <td>{product.name}</td>
                    <td><img src={product.image} height={50} width={50}/></td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                    <td>
                      <Link type="button"class="btn btn-success me-2" to={`/admin/edit/product/${product.id}`}> <FaPenAlt/> </Link>
                       <button type="button"class="btn btn-danger" onClick={()=>handleDelete(product.id)}><FaTrashAlt/>  </button>
                    </td>
                  </tr>)}
                </tbody>
              </table>
            </div>
            
        </div>
    </div>
    </div>  
  )
}

export default ViewProduct
