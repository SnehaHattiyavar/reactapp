
import { Component } from "react";


class Class extends Component{
    constructor(props){
        super()
    }
    render(){
      return (
      <>
      <h1>Hello</h1>
      <h2>{this.props.text}</h2>
      </>
      );
    }
  }

  export default Class;