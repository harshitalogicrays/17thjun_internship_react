import React from 'react'
import { FaPenAlt, FaSearch } from "react-icons/fa";
import { FaLock } from 'react-icons/fa6';
import {  NavLink } from 'react-router-dom';
const Header = () => {
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
          {/* <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> */}
        </ul>
        <form class="d-flex" role="search">
          <div className="input-group">
            <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-danger " type="submit"><FaSearch /></button>
          </div>
        
        </form>
        <ul class="navbar-nav  mb-2 mb-lg-0">
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
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header
