import { useState } from "react";
import '../App.css'

function Dropdown() {

    const options = ["Apple", "Banana", "Mango", "Orange"];
    const [isOpen,setIsOpen]=useState(false)
    const [item,setItem]=useState("select-option")

    function handleClick(item){
        setIsOpen(false)
        setItem(item)
    }


 

  return (
    <div className="dropdown">

        <button onClick={()=>setIsOpen(!isOpen)} >
            {item}
        </button>

        { isOpen &&
            options.map((item)=>{
                return (
                    <div onClick={()=>handleClick(item)}>
                        {item}
                        </div>
                )
            })

        }

      

    </div>
  );
}

export default Dropdown;