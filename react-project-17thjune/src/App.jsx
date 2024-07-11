import { useEffect, useState } from "react"
import BSForm from "./components/02day/BSForm"
import EventDemo from "./components/02day/EventDemo"
import Propsmore from "./components/02day/Propsmore"
import Textboxdemo from "./components/02day/Textboxdemo"
import Form1 from "./components/03day/Form1"
import Product from "./components/04day/Product"
import ReactHookFormDemo from "./components/04day/ReactHookFormDemo"
import FormDemo from "./components/FormDemo"
import Griddemo from "./components/Griddemo"

function App() {
  // const [users,setUsers]=useState([])
  // useEffect(()=>{
  //   getData()
  // },[])

  // let getData=async()=>{ //get API
  //   try{
  //        let res =  await fetch("http://localhost:1000/users")
  //        let data = await res.json()
  //        console.log(data)
  //        setUsers(data)
  //   }
  //   catch(error){console.log(error)}
  // }

  return (
    <>
      <div className="container-fluid">
        <h1 className="text-primary text-center" 
        style={{backgroundColor:'yellowgreen'}}>
          Hello React</h1>
        <h2>Welcome to LRA</h2>
        {/* {users.length==0 && <h1>No user found</h1>}
        {users.map((user,i)=><h1 key={i}>{user.name}</h1>)} */}
      
      {/* <Griddemo/>*/}
      {/* <FormDemo heading="Bootstrap Form Demo" isActive={true} phone={90909090} address="Prahalad nagar">
        <h1>heading tag</h1>
        <Griddemo></Griddemo></FormDemo>  */}
    <hr/>
      {/* <Propsmore username="Harshita" phone={908765432}>
        <h1>heading tag</h1>
        <Griddemo></Griddemo>
        <p>paragragh tag</p>
      </Propsmore> */}
      
      {/* <EventDemo num1={10} num2={20}/> */}

      {/* <BSForm/> */}
      {/* <Textboxdemo /> */}

      {/* <Form1/> */}
        {/* <Product/> */}
        <ReactHookFormDemo/>
      </div>
    </>
  )
}

export default App
