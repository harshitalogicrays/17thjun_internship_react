import React, { useContext, useEffect, useState } from 'react'
import { FaPenAlt, FaSearch,FaArrowCircleLeft,FaShoppingCart  } from "react-icons/fa";
import { FaLock } from 'react-icons/fa6';
import {  Link, NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ShowOnLogin, ShowOnLogout } from './HiddenLinks';
import { MyContext } from './Context';
const Header = () => {
  const data=useContext(MyContext)

  const [username,setUsername]=useState("Guest")
  const redirect=useNavigate()

  useEffect(()=>{
      if(sessionStorage.getItem("17thjun_project") != null){
          let obj=JSON.parse(sessionStorage.getItem("17thjun_project"))
          setUsername(obj.name)
      }
      else {
        setUsername("Guest")
      }
  },[sessionStorage.getItem("17thjun_project")])

  let handleLogout=()=>{
    if(window.confirm('are you sure to logout')){
        sessionStorage.removeItem("17thjun_project")
        toast.success("LoggedOut Successfully")
        redirect('/')
    }

  }


  let [search,setSearch]=useState('')
  let handleSearch=(e)=>{
    e.preventDefault()
    data.filterbysearch(search)
  }
  return (
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">minipro</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
          <NavLink to="/" className="nav-link"
          style={({ isActive}) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "",
              backgroundColor: isActive ? "yellow" : "",
            };
          }}
        > Home </NavLink>
          </li>
          <li class="nav-item">
          <NavLink to="/about" className="nav-link"
          style={({ isActive}) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "",
              backgroundColor: isActive ? "yellow" : "",
            };
          }}
        > Aboutus </NavLink>
          </li>
          <li class="nav-item">
          <NavLink to="/products" className="nav-link"
          style={({ isActive}) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "",
              backgroundColor: isActive ? "yellow" : "",
            };
          }}
        > 
        Our Products </NavLink>
          </li>
          <li class="nav-item">
          <NavLink to="/contact" className="nav-link"
          style={({ isActive}) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "",
              backgroundColor: isActive ? "yellow" : "",
            };
          }}
        > contact Us </NavLink>
          </li>

        </ul>
        <form class="d-flex" role="search">
          <div className="input-group">
            <input class="form-control" type="search" placeholder="Search" 
            name={search} onChange={(e)=>setSearch(e.target.value)}/>
            <button class="btn btn-danger " type="submit" onClick={handleSearch}><FaSearch /></button>
          </div>
        
        </form>
        <ul class="navbar-nav  mb-2 mb-lg-0">
          <ShowOnLogout>
          <li class="nav-item">
          <NavLink to="/signup" className="nav-link"
          style={({ isActive}) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "",
              backgroundColor: isActive ? "yellow" : "",
            };
          }}
        > <FaPenAlt/> SignUp </NavLink>
          </li>
          <li class="nav-item">
          <NavLink to="/signin" className="nav-link"
          style={({ isActive}) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "",
              backgroundColor: isActive ? "yellow" : "",
            };
          }}
        > <FaLock/> SignIn </NavLink>
          </li>
          </ShowOnLogout>
          <ShowOnLogin>
          <li class="nav-item"><Link className="nav-link" to='/cart'><FaShoppingCart size={30}/>
          <span class="badge rounded-pill text-bg-danger">{data.cart.length}</span >
          
           </Link></li>
          <li class="nav-item"><a className="nav-link"> Welcome {username} </a></li>
          <li class="nav-item"><button className="nav-link" 
          onClick={handleLogout}><FaArrowCircleLeft />
          Logout </button></li>
          </ShowOnLogin>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header
