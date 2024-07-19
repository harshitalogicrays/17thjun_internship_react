import React, { useEffect, useState } from 'react'
import {  FaArrowCircleLeft  } from "react-icons/fa";
import {  NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ANavbar = () => {
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
  return (
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
          <NavLink to="/admin" className="nav-link"
          style={({ isActive}) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "",
              backgroundColor: isActive ? "yellow" : "",
            };
          }}
        > Admin Panel </NavLink>
          </li>
        </ul>
        <ul class="navbar-nav  mb-2 mb-lg-0">
          <li class="nav-item"><a className="nav-link"> Welcome {username} </a></li>
          <li class="nav-item"><button className="nav-link" 
          onClick={handleLogout}><FaArrowCircleLeft />
          Logout </button></li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default ANavbar
