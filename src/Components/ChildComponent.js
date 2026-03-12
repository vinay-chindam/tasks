import React from 'react'

function ChildComponent({handleClick}) {
  return (
    <div>
        <h4>Child Component</h4>
        <button onClick={()=>handleClick("data from child component")}>Click here to data transfer</button>
    </div>
  )
}

export default ChildComponent