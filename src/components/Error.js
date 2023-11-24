import { useRouteError } from "react-router-dom";

const Error =()=>{
    const err=useRouteError();
    // console.log(err)
    return (
        <div>
           <h1>Oops..</h1>
           <h2>Something went wrong</h2>
           <h2 style={{ color : "red",fontSize :50}}>{err.status} {err.statusText}</h2>
           <h3>{err.data}</h3>
        </div>
    )
}

export default  Error;