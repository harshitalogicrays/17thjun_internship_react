import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <ul class="nav flex-column">
    <li class="nav-item">
      <Link class="nav-link active" aria-current="page" to='/admin'>
        <div style={{marginLeft:'30px'}}><FaUserCircle size={40}/></div><br/>
        Dashboard</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to='/admin/add/product'>Add Product</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to='/admin/view/product'>View Product</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to='/admin/orders'>Orders</Link>
    </li>
  </ul>
  )
}

export default Sidebar
