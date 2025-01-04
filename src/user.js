import { useLocation, useParams } from "react-router-dom";


const User=()=>{
    const {fname}= useParams();
    const location=useLocation();
    return (
        <>
            <h1>Hello ,{fname}</h1>
            <p>{location.pathname}</p>
        </>
    )
}
export default User;
    