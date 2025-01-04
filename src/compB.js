import CompC from "./compC";
import { Name,Name1 } from './App';
import { useContext } from "react";

const CompB=()=>{
    const n=useContext(Name);
    const n1=useContext(Name1)
    return(
        <>
          <h1>Welocme  {n} {n1}</h1>

         <CompC/>

        </>

    );
  }
  export default CompB;