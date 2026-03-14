import React, { useEffect, useState ,useRef} from 'react'

function SearchComponent() {

    const [query,setQuery]=useState("")
    const [debouncequery,setdebounceQuery]=useState("")




    useEffect(()=>{
        const timer=setTimeout(()=>{
            setdebounceQuery(query)
        },1000)

        return ()=>{
            clearTimeout(timer)
        }
    },[query])

    useEffect(()=>{
        if(debouncequery){
            console.log(`API call for ${debouncequery}`)

        }
        
    },[debouncequery])

    const lastcallRef=useRef(0)

    useEffect(()=>{
        
        const now=Date.now()
        if ( query &&now-lastcallRef.current>=2000){
            lastcallRef.current=now
            console.log(`throttle call ${query}`)
        }

    },[query])


  return (
    <div>

        <input
        type='text'
        placeholder='search here ....'
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        />
    </div>
  )
}

export default SearchComponent