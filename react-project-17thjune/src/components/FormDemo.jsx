// function FormDemo(){
// return (<></>)
// }
// export default FormDemo

// const FormDemo=()=>{
//     return (<></>)
// }
// export default FormDemo


// rafc - react arrow fun component
import React from 'react'

const FormDemo = (props) => {
    console.log(props) // props are read only
  return (
        <>
            <h2>{props.heading}</h2><hr/>
            <h5>{props.phone}</h5>
            <p>{props.address}</p>
            {props.children}
        </>
  )
}

export default FormDemo
