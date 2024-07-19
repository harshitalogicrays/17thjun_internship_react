import React from 'react'

const Cart = () => {
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
                    <tr><td colspan={7}>No item in cart</td></tr>
                    <tr>
                        <td>R1C1</td>
                        <td>R1C2</td>
                        <td>R1C3</td>
                        <td>Item</td>
                        <td>Item</td>
                        <td>Item</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="row">
            <div className="col-9">
                <button type="button"class="btn btn-danger btn-lg" > Empty Cart</button>   
            </div>
            <div className="col">
                <h3>Total: <span className="float-end">$0</span></h3><hr/>
                <div class="d-grid gap-2">
                    <button type="button"  class="btn btn-info" >
                        Checkout
                    </button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Cart
