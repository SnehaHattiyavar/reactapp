//import logo from './logo.svg';
//import { Route, Routes } from 'react-router-dom';
//import { useSearchParams } from 'react-router-dom';
import './App.css';
//import { createContext } from 'react'; //useState is hook
//import CompA from './compA';
// import About from './about';
// import Contact from './contact';
// import Error from './error';
// import Menu from './menu';
// import User from './user';


// import Heading from './heading';
// import Lst from './list';

//  1)function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// 2)export default App;
  // function App(){
  //   <>
  //     <a href="https://www.itvedant.com">Click here</a>
  //     <Heading name1='Pune'></Heading>
  //     <Heading name2='Pimpri'></Heading>
  //     <Lst module='java'></Lst>
  //     </>
  // };
  // export default App; 

  // 3) function App(){
  //   var count=0;
  //   const[curval,setCurVal]=useState(count);
  //   const IncVal=()=>{
  //    setCurVal(curval+1);

  //   }
  //   return(
  //     <>
  //       <h1>{curval}</h1>
  //       <button onClick={IncVal}> 👍 </button>
  //     </>
  //   )
  // }
  // export default App;
   

  //  4) function App(){

  //    var ctime=new Date().toLocaleTimeString();
  //    const [curtime,setCurTime]=useState(ctime);
  //    const IncVal=()=>{
  //      var ctime=new Date().toLocaleTimeString();
  //      setCurTime(ctime)
  //    }
  //    setInterval(IncVal,1000)
  //      return(
  //       <>
  //        <h1>{curtime}</h1>
  //       <button style={{ backgroundColor: bgColor, color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}
  //     onDoubleClick={handleDoubleClick}> :clock10: </button>
  //       </>
        
  //     );
    
  //  }
  //  export default App;

//   5) function App(){

//     var ctime=new Date().toLocaleTimeString();
//     const [curtime,setCurTime]=useState(ctime);
//     const IncVal=()=>{
//       var ctime=new Date().toLocaleTimeString();
//       setCurTime(ctime)
//     }
//     setInterval(IncVal,1000)

//     const ColorButton = () => {
      
//       const [bgColor, setBgColor] = useState('blue'); // Default color
    
//       // Function to handle double-click
//       const handleDoubleClick = () => {
//         // Change color to a different one
//         if (bgColor === 'blue') {
//           setBgColor('green');
//         } else {
//           setBgColor('blue');
//         }
//       };
//       return(
//        <>
//         <h1>{curtime}</h1>
//        <button style={{ backgroundColor: bgColor, color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}
//      onDoubleClick={handleDoubleClick}> :clock10: </button>
//        </>
       
//      );
   
//   }
// }
//   export default App;
   
  

  //  function App(){
  //    //const[name,setName]=useState();
  //   // const[fname,setFname]=useState();
  //   // const [lname,setLname]=useState();

  //   const[Name,setName]=useState({
  //     fname:'',
  //     lname:''
  //   });

  //   const[fullname,setFname]=useState({
  //     fname:'',
  //     lname:''
  //   });

  //   const inputEvent=(e)=>{
  //     // //console.log(e.target.type);
  //     // setName(e.target.value);
  //     // // var s=e.target.value;
  //     // // setName(s)

  //     const n=e.target.name;
  //     const v=e.target.value;
  //     setFname((preValue)=>{
  //         // if(n=== 'fname'){
  //         //   return{
  //         //     fname:v,
  //         //     lname:preValue.lname,
  //         //   }
  //         // }
  //         // else{
  //         //   return{
  //         //     fname:preValue.fname,
  //         //     lname:v
  //         //   }
  //         // }
  //         return{
  //           ...preValue,
  //           [n]:v
  //         }
  //     })
  //   }

  //    const buttonClick=(e)=>{
  //     e.preventDefault();
  //    setName(      {
  //       fname:fullname.fname,
  //       lname:fullname.lname
  //     }
  //    )
      
  //    }

  //   return(
  //     <>
  //     <form onSubmit={buttonClick}>
  //       <h1>Hello,{Name.fname} {Name.lname}</h1>
  //       <input type='text' placeholder='Enter Your First Name' name='fname' onChange={inputEvent}  /><br/>
  //       <input type='text' placeholder='Enter Your Last Name' name='lname ' onChange={inputEvent}  /> <br/>
  //        {/* <button onClick={buttonClick}>Click me</button>  */}
  //        <button >Click me</button> 
  //        </form>
  //     </>
  //   );
  // }

  // export default App;

  
  // const Name=createContext();
  // const Name1=createContext();

  // const App=()=>{
  //   return(
  //     <> <Name.Provider value={'Sneha'}>
  //        <Name1.Provider value={'Hattiyavar'}>
        
  //          <CompA/>
  //          </Name1.Provider>
  //          </Name.Provider>

  //     </>

  //   );
  // }
  // export default App;
  // export {Name};
  // export {Name1};

  // const App=()=>{
  //   return(
  //     <>
      
        
  //     <Menu/>
  //         <Routes>
  //           <Route path='/about' Component={About}></Route>
  //           <Route path='/contact' element={<Contact/>}/>
  //           <Route path='*' Component={Error}/>
  //           <Route path='/user/:fname' element={<User/>}/>
  //         </Routes>
  //     </>

  //   );
  // }
  // export default App;


//    import { Component } from 'react';
//  import Class from './class';
 

//   //const[count,setCount]=useState(0)
//   class App extends Component{
//     constructor(){
//       super()
//       this.n='PS-405';
//       this.state={
//         name:'ITvedant',
//         branch:'pimpri',
//       }
//     }

//     newval=()=>{
//       this.setState({name:' ITV '});
//     }
//     render(){
//       //const{name,branch}=this.state;
//       return (
//       <>
//       <h1>Hello from {this.n}</h1>
//       <h2>You are enrolled on {this.state.name} {this.state.branch}</h2>
//       <button onClick={this.newVal}>Change</button>
//       <Class text='sneha'/>
//       </>
//       );
//     }
//   }

//   export default App;

// class App extends Component {
//   constructor() {
//     super();
//     this.n = 'PS-405';
//     this.state = {
//       name: 'ITvedant',
//       branch: 'pimpri',
//     };
//   }

//   newval = () => {
//     this.setState({ name: 'ITV' });
//   };

//   render() {
//     const { name, branch } = this.state; // Corrected destructuring
//     return (
//       <>
//         <h1>Hello from {this.n}</h1>
//         <h2>You are enrolled on {name} {branch}</h2>
//         <button onClick={this.newval}>Change</button> {/* Corrected function call */}
//         <Class />
//       </>
//     );
//   }
// }

// export default App;

// import React,{ Component } from 'react';
// //import Class from './class';  

// class App extends Component{
//   constructor(){
//     super()
//     this.inputRef=React.createRef();
//   }
//   handleSubmit=(e)=>{
//     e.preventDefault();
//     //console.log(this.inputRef.current.value);
//     alert("Hello," +this.inputRef.current.value)

//   }

//   render(){
//     return(
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <input type='text' ref={this.inputRef} defaultValue={'Sneha'}></input>
//           <button type='submit'>Click</button>
//         </form>
//       </>
//     )
//   }
// }
// export default App;

// import React,{ Component, useRef } from 'react';
// //import Class from './class';  

// const App=()=>{
//     const inputRef=useRef();
  
//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     //console.log(this.inputRef.current.value);
//     alert("Hello," +inputRef.current.value)

//   }


//     return(
//       <>
//         <form onSubmit={handleSubmit}>
//           <input type='text' ref={inputRef} defaultValue={'Sneha'}></input>
//           <button type='submit'>Click</button>
//         </form>
//       </>
//     )
// }

// export default App;



// import React,{  useState } from 'react';
// //import Class from './class';  

// const App=()=>{
//     const [count,setCount]=useState(0);
//     // const handle=()=>{
//     //   setCount(count+1)
//     // }
//     return(
//       <>
//         <h1>Count: {count}</h1>
//         <button onClick={()=>{setCount(count+1)}}>increment</button>
  
//       </>
//     )

//   }
// export default App;

import { useReducer } from 'react';

const initialstate={count:0}
function reducer(state,action){

  if (action.type==='increment'){
    return{count:state.count+1}
  }
  else if(action.type==='decrement'){
    if(state.count > 0){
    return{count:state.count-1}
  }
 else{
  alert("Value should not be less than zero....!!!")
    return initialstate
 }
}

  else{
    //return{count:0}
    return initialstate;
  }

}
const App=()=>{
   const [state,dispatch]=useReducer(reducer,initialstate)
  //const [state,dispatch]=useReducer(useReducer,{count:0})
  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={()=>{dispatch({type:'increment'})}}>increment</button>
      <button onClick={()=>{dispatch({type:'decrement'})}}>decrement</button>
      <button onClick={()=>{dispatch({type:'reset'})}}>reset</button>
    </>
  )
}
export default App;

