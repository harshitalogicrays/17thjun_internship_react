import React from 'react'

const Propsmore = ({username,phone,children}) => {
    // let {username,phone}=props
  return (
   <>
    <h2>Props Demo</h2>
    {username}<br/>
    {phone}<br/>
    {/* {children} */}

    {children[1]}
   </>
  )
}

export default Propsmore
