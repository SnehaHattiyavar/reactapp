
import Heading from "./heading";

function Property(a){
    return(
        <>
        <h1> module Name is:{a.topic}</h1>
        <Heading  p={a.topic} name1='ITvedant'></Heading>
        </>
    );
}
export default Property;