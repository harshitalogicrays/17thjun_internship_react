import React from 'react'

const BSForm = () => {
  return (
    <div className='container col-6 '>
        <div className="row">
            <div className='mb-3 col'>
                <label htmlFor="username" className='form-label'>Username</label>
                <input type='text' name="username" className='form-control'/>
            </div>
            <div className='mb-3 col'>
                <label htmlFor="email" className='form-label'>Email</label>
                <input type='text' name="email" className='form-control'/>
            </div>
        </div>
       
        <div className='mb-3'>
            <label htmlFor="password" className='form-label'>Password</label>
            <input type='password' name="password" className='form-control'/>
        </div>
        <div className='mb-3'>
            <label htmlFor="cpassword" className='form-label'>Confirm Password</label>
            <input type='password' name="cpassword" className='form-control'/>
        </div>
        <div  className='form-check'>
            <label htmlFor="" className='form-check-label'>Accept T&C</label>
            <input type="checkbox" name="" id="" className='form-check-input' />
        </div>
        <div  className='form-check-inline'>
        <input type="radio" name="gender" id="" className='form-check-input' />
            <label htmlFor="" className='form-check-label'>MAle</label>
            
        </div>
        <div  className='form-check-inline'>
        <input type="radio" name="gender" id="" className='form-check-input' />
            <label htmlFor="" className='form-check-label'>Female</label>
           
        </div>

            <div className='form-floating mb-3'>             
                <input type='text' name="username" className='form-control' placeholder=''/>
                <label htmlFor="username" className='form-label'>Username</label>
            </div>

            <div className="input-group mb-2">
                <span className="input-group-text">@</span>
                 <input type='text' name="username" className='form-control' placeholder=''/>
                 <button  type="button" class="btn btn-primary" >
                    search
                 </button>             
            </div>

    <div class="mb-3">
        <label for="" class="form-label">Name</label>
        <input type="text" name=""    class="form-control"/>
    </div>
    

    </div>
  )
}

export default BSForm
