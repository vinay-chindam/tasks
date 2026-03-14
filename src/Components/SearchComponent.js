import React, { useEffect, useState } from 'react'

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