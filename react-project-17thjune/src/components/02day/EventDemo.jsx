import React from 'react'

const EventDemo = ({num1,num2}) => {
    let handleClick=()=>{
        alert(num1+num2)
    }
    let handleAdd=(a,b)=>{
        alert(a+b)
    }
  return (
  <>
    <button type="button" class="btn btn-primary me-2" 
    onClick={()=>alert("button clicked")} >Click Me </button>
     <button type="button" class="btn btn-info me-2" 
    onClick={handleClick} >Click Me </button>
      <button type="button" class="btn btn-info me-2" 
    onClick={()=>handleAdd(2,4)} >Add  </button>
  </>
  )
}

export default EventDemo
