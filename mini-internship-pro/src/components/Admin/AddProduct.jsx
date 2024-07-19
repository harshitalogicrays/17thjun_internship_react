import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddProduct = () => {
    const redirect=useNavigate()
    let categories = ["Kids","Beauty",'furniture','bathroom','home','toys']
    let [product,setProduct]=useState({name:'',category:'',type:'',price:'',stock:'',image:'',desc:''})
    let handleImage=(e)=>{
        let file = e.target.files[0]
        let reader=new FileReader()
        reader.readAsDataURL(file)
        reader.onload=()=>{
            // console.log(reader.result)
            setProduct({...product,image:reader.result})
        }  }


        //edit 
        const {id}=useParams()
        let getProductData=async()=>{
            try{
              let res= await fetch(`${import.meta.env.VITE_URL}/products/${id}`)
              let data =await res.json()
              setProduct(data) }
          catch(error){console.log(error)} }
        
        useEffect(()=>{
            if(id){  getProductData()   }
            else {setProduct({name:'',category:'',type:'',price:'',stock:'',image:'',desc:''})}
        },[id])

    let handleSubmit=async(e)=>{
        e.preventDefault()
        if(!id){//add
            try{
                await fetch(`${import.meta.env.VITE_URL}/products`,{
                    method:"POST",
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify({...product,createdAt:Date.now()})                 })
                toast.success("product added")
                redirect('/admin/view/product') }
            catch(error){console.log(error)}
        }
        else { //update
            try{
                await fetch(`${import.meta.env.VITE_URL}/products/${id}`,{
                    method:"PUT",
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify({...product,createdAt:product.createdAt,editedAt:Date.now()})                 })
                toast.success("product updated")
                redirect('/admin/view/product') }
            catch(error){console.log(error)}
        }
       
    }
  return (
    <div className="container mt-4 ">
    <div className='card shadow'>
        <div className="card-header">
            <h1>{id?"Edit ":"Add "} Product
                <Link type="button" class="btn btn-primary float-end btn-lg" to='/admin/view/product'>View Products </Link>               
            </h1>
        </div>
        <div className="card-body">
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="" class="form-label">Choose Category</label>
                    <select class="form-select" name="category" value={product.category}
                    onChange={(e)=>setProduct({...product,category:e.target.value})}>
                        <option value='' selected disabled>Select one</option>
                        {categories.map((c,i)=><option key={i}>{c}</option>)}
                    </select>
                </div>
                <div className="row">
                    <div class="mb-3 col">
                        <label for="" class="form-label">Name</label>
                        <input type="text"  name="name"   class="form-control"  value={product.name}
                    onChange={(e)=>setProduct({...product,name:e.target.value})}/>
                    </div>
                    <div class="mb-3 col">
                        <label for="" class="form-label">Type</label>
                        <input type="text"  name="type"   class="form-control"  value={product.type}
                    onChange={(e)=>setProduct({...product,type:e.target.value})}/>
                    </div>
                </div>
                <div className="row">
                    <div class="mb-3 col">
                        <label for="" class="form-label">Price</label>
                        <input type="number"  name="price"   class="form-control"  value={product.price}
                    onChange={(e)=>setProduct({...product,price:e.target.value})}/>
                    </div>
                    <div class="mb-3 col">
                        <label for="" class="form-label">Stock</label>
                        <input type="number"  name="stock"   class="form-control"  value={product.stock}
                    onChange={(e)=>setProduct({...product,stock:e.target.value})}/>
                    </div>
                </div>
               
                <div class="mb-3">
                    <label for="" class="form-label">Image</label>
                    <input type="file"  name="image"   class="form-control" onChange={handleImage}/>
                </div>
                {id && <img src={product.image} height={50} width={50}/>}
                <div class="mb-3">
                    <label for="" class="form-label">Description</label>
                    <textarea name="desc"   class="form-control" value={product.desc}
                    onChange={(e)=>setProduct({...product,desc:e.target.value})}>{product.desc}</textarea>
                </div>
                <button  type="submit" class="btn btn-primary" > {id? "Update Product" : "Submit"}  </button>
                
            </form>
        </div>
    </div>
    </div>  
  )
}

export default AddProduct
