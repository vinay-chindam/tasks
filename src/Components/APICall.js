import { useState ,useEffect} from "react";

const ApiCall=()=>{
    const [query,setQuery]=useState("")
    const [query2,setQuery2]=useState("")

    useEffect(()=>{
        const timer=setTimeout(()=>{
            setQuery2(query)
        },500)

        return ()=>clearTimeout(timer)
    },[query])

    useEffect(()=>{

        if(query2){
             console.log("api call sent to "+ query2)


        }

       
    },[query2])


    
    return(
        <>

        <input
        type="text"
        name="query"
        onChange={(e)=> setQuery(e.target.value)}
        
        />


        </>
    )
}

export default ApiCall