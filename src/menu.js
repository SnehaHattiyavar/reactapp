import {  NavLink } from "react-router-dom";

const Menu=()=>{
    return(
        <>
         
         <NavLink  activeclassName={'active_link'} to='/about'>About</NavLink><br></br>
         <NavLink to='/contact'>Contact</NavLink>
        </>
    )    
}
export default Menu;