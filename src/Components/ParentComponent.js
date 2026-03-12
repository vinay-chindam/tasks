import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {

    const [message,setMessage]=useState("Hi")

    function handleClick(data){
        setMessage(data)
    }
  return (
    <>

    <div>
        <h4>parent Component</h4>
        <h1>{message}</h1>
        <ChildComponent handleClick={handleClick}/>
    </div>
    </>
    
  )
}

export default ParentComponent