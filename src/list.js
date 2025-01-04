function Lst(){
    return (
    <>
        <ul>
            <li>PS405</li>
            <li>PS406</li>
            <li>PS407</li>

        </ul>
    </>
    );
}

 function Lst2(p)
 {
    return(
        <>
        <p>
            Hello from Itvedant,we all are FSD Students
        </p>
        <ol>
            <li>Python</li>
            <li>SQL</li>
            <li>Web designing</li>
            <li>React</li>
            <li>{p.module}</li>
        </ol>
        </>
    );
 }
 const trainer="Dipali Patil "
 export default Lst;
 export {Lst2,trainer};