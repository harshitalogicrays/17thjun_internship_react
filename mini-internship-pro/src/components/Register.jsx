import React from 'react'
import Image1 from '/src/assets/images/register.png'
import { useForm } from 'react-hook-form'
import {toast} from 'react-toastify'
import { useNavigate,Link } from 'react-router-dom'
const Register = () => {
  const {register,handleSubmit , formState: { errors } , trigger ,getValues}=useForm()
  const redirect=useNavigate()
  let formData=async(user)=>{
          try{
              await fetch(`${import.meta.env.VITE_URL}/users`,{
                  method:"POST",
                  headers:{'content-type':'application/json'},
                  body:JSON.stringify({...user,role:'1',createdAt:Date.now()})               
              })
              toast.success("registered successfully")
              redirect('/signin')
          }
          catch(error){console.log(error)}
  }   
return (
  <div className='container mt-5'>
      <div className="row">
          <div className="col">
              <img src={Image1} className='img-fluid'/>
          </div> <div className="col">
          <form onSubmit={handleSubmit(formData)}>
          <div className='mb-3 col'>
              <label htmlFor="username" className='form-label'>Username</label>
              <input type='text' name="username" className='form-control' 
              {...register('username',{required:"Username is required",
              minLength:{ value:5,  message:"min 5 char"   }  })}
              onBlur={()=>trigger('username')}/>
             {errors.username && <span className='text-danger'>{errors.username.message}</span>}
          </div>
          
          <div className='mb-3 col'>
              <label htmlFor="email" className='form-label'>Email</label>
              <input type='text' name="email" className='form-control'  
               {...register('email',{required:"Email is required",
                  pattern:{
                      value:/^([\w\!\#\$\%\^\&\*\-\+\=\.]+)\@([\w]+)\.([a-zA-Z]{2,3})$/,
                      message:"Invalid Email"
                  }
               })} 
             onBlur={()=>trigger('email')}/>
              {errors.email && <span className='text-danger'>{errors.email.message}</span>}
          </div>
          <div className='mb-3 col'>
              <label htmlFor="email" className='form-label'>Mobile</label>
              <input type='number' name="mobile" className='form-control'   
              {...register('mobile',{
                  pattern:{  value:/^[9876][0-9]{9}$/,  message:'10 digits'  }  })} onBlur={()=>trigger('mobile')}/>
               {errors.mobile && <span className='text-danger'>{errors.mobile.message}</span>}   </div>
          <div className='mb-3'> <label htmlFor="password" className='form-label'>Password</label>
              <input type='password' name="password" className='form-control'
               {...register('password',
                  {required:'Password is required',
                      pattern:{
                          value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[\!\@\#\$\%\^\&\*\-\+\=\._]).{8,12}$/,
                          message:'1upper, 1lower, 1 digit, 1 special symbol min8 and max12 char allowed'
                      }
                  }
               )} onBlur={()=>trigger('password')}/>
                   {errors.password && <span className='text-danger'>{errors.password.message}</span>}
          </div>
          <div className='mb-3'>
              <label htmlFor="cpassword" className='form-label'>Confirm Password</label>
              <input type='password' name="cpassword" className='form-control'
                {...register('cpassword',{
                  required:"password is required" ,
                  validate:(cpwd)=>{
                      let {password} =getValues()
                      return password==cpwd || "password not match"
                  }
                })}  onBlur={()=>trigger('cpassword')}/>
                  {errors.cpassword && <span className='text-danger'>{errors.cpassword.message}</span>}
          </div>
          <button type="submit" className="btn btn-primary"  > Submit  </button>
          
          </form>
          <p>Already an account??<Link to='/signin'>Login</Link> </p>
          </div>
      </div>
  </div>
)
}

export default Register
