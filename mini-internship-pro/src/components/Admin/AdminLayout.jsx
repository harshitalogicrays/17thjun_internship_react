import React from 'react'
import ANavbar from './ANavbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
const AdminLayout = () => {
  return (
  <>
   <ToastContainer
    position="bottom-left"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss={false}
    draggable={false}
    pauseOnHover={false}
    theme="colored"
    />
    <ANavbar/>
    <div className="row">
        <div className="col-2"><Sidebar/></div>
        <div className="col"><Outlet/></div>
    </div>
  </>
  )
}

export default AdminLayout
