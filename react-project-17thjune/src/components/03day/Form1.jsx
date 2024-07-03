import React, { useState } from 'react'
import Image1 from '/src/assets/images/login.jpg'
import ListRendering from './ListRendering'
const Form1 = () => {
    const [user,setUser]=useState({username:'',email:'',mobile:'',password:'',cpassword:''})

    let handleSubmit=(e)=>{
        e.preventDefault() // prevent from the default nature of the button
        alert(JSON.stringify(user)) //JS object into JSON string  - JSON.stringify(jsobject)
                                   //json string to js object - JSON.parse(jsonstring)
    }
  return (
    <div className='container mt-5 shadow p-2'>
        <ListRendering/>
        <hr/>
      <div className="row">
        <div className="col">
            <img src={Image1} className='img-fluid'/>
        </div>
        <div className="col">
            <form onSubmit={handleSubmit}>
            <div className='mb-3 col'>
                <label htmlFor="username" className='form-label'>Username</label>
                <input type='text' name="username" className='form-control'
                value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}/>
            </div>
            <div className='mb-3 col'>
                <label htmlFor="email" className='form-label'>Email</label>
                <input type='text' name="email" className='form-control'   
                value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/>
            </div>
            <div className='mb-3 col'>
                <label htmlFor="email" className='form-label'>Mobile</label>
                <input type='number' name="mobile" className='form-control'   
                value={user.mobile} onChange={(e)=>setUser({...user,mobile:e.target.value})}/>
            </div>
            <div className='mb-3'>
                <label htmlFor="password" className='form-label'>Password</label>
                <input type='password' name="password" className='form-control'
                  value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
            </div>
            <div className='mb-3'>
                <label htmlFor="cpassword" className='form-label'>Confirm Password</label>
                <input type='password' name="cpassword" className='form-control'
                  value={user.cpassword} onChange={(e)=>setUser({...user,cpassword:e.target.value})}/>
            </div>
            <button type="submit" className="btn btn-primary"  > Submit  </button>
            
            </form>
        </div>
      </div>

    
    </div>
  )
}

export default Form1
