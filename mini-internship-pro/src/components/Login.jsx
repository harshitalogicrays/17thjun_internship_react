import React from 'react'
import Image1 from '/src/assets/images/login.png'
import { useForm } from 'react-hook-form'
import {toast} from 'react-toastify'
import { useNavigate,Link } from 'react-router-dom'
const Login = () => {
  const {register,handleSubmit , formState: { errors } , trigger}=useForm()
  const redirect=useNavigate()
  let formData=async(user)=>{
          try{
              let res = await  fetch(`${import.meta.env.VITE_URL}/users?email=${user.email}`)
              let data =  await res.json()
              if(data.length==0){toast.error("Invalid credentials")}
              else {
                  if(data[0].password == user.password){
                    if(data[0].role=="0"){redirect('/admin')}
                    else if(data[0].role=="1"){redirect('/')}
                    toast.success("loggedIn successfully")   
                    let obj = {isLoggedIn:true,email:data[0].email, name:data[0].username, role:data[0].role}     
                    sessionStorage.setItem("17thjun_project",JSON.stringify(obj))            
                  }
                  else toast.error("Invalid credentials")
              }
          }
          catch(error){toast.error(error)}
  }   
  return (
    <div className='container mt-5 shadow'>
        <h1>Login Page</h1>
    <div className="row">
        <div className="col">
            <img src={Image1} className='img-fluid'/>
        </div> <div className="col">
        <form onSubmit={handleSubmit(formData)}>
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
     <div className='mb-3'> <label htmlFor="password" className='form-label'>Password</label>
            <input type='password' name="password" className='form-control'
             {...register('password',
                {required:'Password is required' }
             )} onBlur={()=>trigger('password')}/>
                 {errors.password && <span className='text-danger'>{errors.password.message}</span>}
        </div>
      
        <button type="submit" className="btn btn-primary"  > Submit  </button>
        
        </form>
        <p>create an account??<Link to='/signup'>SignUp</Link> </p>
        </div>
    </div>
</div>
  )
}

export default Login
