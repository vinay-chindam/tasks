import { useState ,useEffect} from "react";


const ApiData=()=>{

    const API_URL="https://jsonplaceholder.typicode.com/users"
    const [userData,setUserData]=useState([])
    

    useEffect(()=>{
        const apifunc=async ()=>{
            const data=await fetch(API_URL)
            const json=await data.json();
            setUserData(json)
            console.log(json)
        
        }
        apifunc()

    },[API_URL])
    return (
        <>
        
        {
            userData.map((user)=>{
                return(
                    <div key={user.id}>
                        <h1>{user.name}</h1>
                        <span>{user.email}</span>
                    </div>
                )
            })
            
        }
        


        </>
    )
}

export default ApiData;