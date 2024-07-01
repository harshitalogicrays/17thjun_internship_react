import React, { useState } from 'react'
import  Image1 from '/src/assets/images/a.jpg'
const Textboxdemo = () => {
    // let username="Harshita"
    let [username,setUsername]=useState("") //useState - hook (function)
  return (
    <div className='container mt-5'>
        <div className="row">
            <div className="col">
                <img src={Image1} className='img-fluid' />
            </div>
            <div className="col">
                <div className='mb-3 row'>
                    <div className="col-3"><label htmlFor="username" className='form-label'>Username</label></div>
                   
                    <div className="col-9"><input type='text' name="username" className='form-control' value={username} 
                    onChange={(e)=>setUsername(e.target.value)
                    }/></div>                
                </div>
                <h1>Hello {username}</h1>
            </div>
        </div>
    
    </div>
  )
}

export default Textboxdemo
