import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Register from "./components/Register"
import Login from "./components/Login"
import Pagenotfound from "./components/Pagenotfound"
import Home from "./components/Home"

const allroutes=createBrowserRouter([
    {path:'/',element:<App/>,
        children:[
            {path:'',element:<Home/>},
            {path:'signup',element:<Register/>},
            {path:'signin',element:<Login/>}
        ]
    },
    {path:'*',element:<Pagenotfound/>}
])

export default allroutes