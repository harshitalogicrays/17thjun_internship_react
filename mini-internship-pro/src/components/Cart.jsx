import React, { useContext, useEffect } from 'react'
import { MyContext } from './Context'
import { FaTrashAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Cart = () => {
    const redirect=useNavigate()
    const data=useContext(MyContext)
    let {cart,total,increase,decrease,removefromcart,emptycart,calculatetotal} =data
    useEffect(()=>{
        calculatetotal()
    },[cart])

    let handleCheckout=async()=>{
        if(cart.length !=0){
            let email=JSON.parse(sessionStorage.getItem("17thjun_project")).email
            let obj={cart,total,email,status:"Pending",payment_mode:"COD",orderDate:new Date().toLocaleDateString(),orderTime:new Date().toLocaleTimeString(),createdAt:Date.now()}
            try{
                await fetch(`${import.meta.env.VITE_URL}/orders`,{
                    method:"POST",
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify(obj)                 })
                toast.success("order placed")
                redirect('/') }
            catch(error){console.log(error)}
        }
    }
  return (
    <div className='container mt-5 shadow p-2'>  
        <h1>Cart Page</h1><hr/>
        <div class="table-responsive" >
            <table class="table table-bordered table-striped table-hover"  >
                <thead>
                    <tr>
                        <th scope="col">Sr. No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>Total Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.length==0 &&   <tr><td colspan={7}>No item in cart</td></tr>}
                  {cart.map((c,i)=>
                    <tr key={c.id}>
                        <td>{i+1}</td>
                        <td>{c.name}</td>
                        <td><img src={c.image} height={50} width={50}/></td>
                        <td>{c.price}</td>
                        <td>
                            <div className="input-group">
                            <button onClick={()=>decrease(c)}>-</button>
                            <input type="text" value={c.qty} readOnly style={{width:'40px',textAlign:'center'}} />
                            <button onClick={()=>increase(c)}>+</button></div>
                        </td>
                        <td>{c.price*c.qty}</td>
                        <td>
                            <button type="button" className='btn btn-danger' onClick={()=>removefromcart(c.id)}><FaTrashAlt/></button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
        <div className="row">
            <div className="col-9">
                <button type="button"class="btn btn-danger btn-lg" onClick={()=>emptycart()}> Empty Cart</button>   
            </div>
            <div className="col">
                <h3>Total: <span className="float-end">${total}</span></h3><hr/>
                <div class="d-grid gap-2">
                    <button type="button"  class="btn btn-info" onClick={handleCheckout} >
                        Checkout
                    </button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Cart
