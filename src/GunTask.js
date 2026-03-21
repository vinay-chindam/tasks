import React, { useEffect, useRef, useState } from 'react'

function GunTask() {
  const [count1, setCount1] = useState(0)


  const [countClicked,setCountClicked]=useState(0)
    const [debounceCount,setDebounceClick]=useState(0)

    const [throttleCount,setThrottleCount]=useState(0)
    const lastTime=useRef(0)

  
  function NormalGun() {
    setCount1((prev) => prev + 1)
  }
  function handlecountClicked(){
    setCountClicked((prev)=>prev+1)
  }

  useEffect(()=>{
    const t1=setTimeout(()=>{
        setDebounceClick(countClicked)
    },1000)
    return ()=> clearTimeout(t1)

  },[countClicked])

  function  handlethrottleClicked(){
    const t2=Date.now()
    if(t2-lastTime.current>1000){
        setThrottleCount((prev)=>prev+1)
        lastTime.current=Date.now()
    }
  }


  return (
    <div>
     
      <div>
        <span>{count1}</span>
        <button onClick={NormalGun}>Normal Click</button>
      </div>

      <div>

        <span>{debounceCount}</span>
        <button onClick={handlecountClicked}>Normal Click</button>

      </div>

      <div>

        <span>{throttleCount}</span>
        <button onClick={handlethrottleClicked}>throttle Click</button>

      </div>

     
    </div>
  )
}

export default GunTask