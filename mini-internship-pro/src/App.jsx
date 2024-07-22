import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Context from "./components/Context";

function App() {
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
    <Context>
          <Header/>
          <Outlet/>
    </Context>
 </>
  )
}

export default App
