import { useState } from "react" ; 
const User = (props)=>{
    const [count , setCount ] = useState(0)
    const [count2 , setCount2] = useState(2)
    const {name,city,contact } = props
    return (
        <div className="user-card">
            <h1>{count}</h1>
            <h1>{count2}</h1>
            <h1> name : {name}</h1>
            <h2> city : {city}</h2> 
            <h2> contact : {contact}</h2>
        </div>
    )
}
export default User