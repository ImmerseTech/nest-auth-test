import { useEffect, useState } from "react"

export const UserPage = ({setIsUser}) => {
    const [name, setName] = useState()

    useEffect(()=>{
     const data = localStorage.getItem('name')
     setName(data)
    },[])

    const handleChange = async () => {
        localStorage.clear();
        setIsUser()
    }
    return (
        <div>
            <h2>Hi, {name}! You’re logged in.</h2>
        <button 
            className="btn"
            onClick={()=>handleChange()}
        >
        Log out
        </button>
        </div>

    )
}