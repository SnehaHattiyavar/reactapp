

function Heading(props){
    return(
        <>
        <h1 style={{"textAlign":"center"}}>Hello From Itvedant</h1>
        <p style={{"textAlign":"center","backgroundColor":"lightpink"}} >My batch Time:3:00:00 PM</p>
        <h5>{props.p}</h5>
        </>
    );
}
export default Heading;