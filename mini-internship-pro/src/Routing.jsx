import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Register from "./components/Register"
import Login from "./components/Login"
import Pagenotfound from "./components/Pagenotfound"
import Home from "./components/Home"
import Product from "./components/Product"
import AdminLayout from "./components/Admin/AdminLayout"
import Dashboard from "./components/Admin/Dashboard"
import AddProduct from "./components/Admin/AddProduct"
import ViewProduct from "./components/Admin/ViewProduct"
import Cart from "./components/Cart"

const allroutes=createBrowserRouter([
    {path:'/',element:<App/>,
        children:[
            {path:'',element:<Home/>},
            {path:'signup',element:<Register/>},
            {path:'signin',element:<Login/>},
            {path:'products',element:<Product/>},
            {path:'cart',element:<Cart/>},
        ]
    },
    {path:'/admin',element:<AdminLayout/>,
        children:[
            {path:'',element:<Dashboard/>},
            {path:'add/product',element:<AddProduct/>},
            {path:'view/product',element:<ViewProduct/>},
            {path:'edit/product/:id',element:<AddProduct/>},
        ]
    },
    {path:'*',element:<Pagenotfound/>}
])

export default allroutes