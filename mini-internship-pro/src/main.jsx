import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { RouterProvider } from 'react-router-dom'
import allroutes from './Routing.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={allroutes}/>,
)
