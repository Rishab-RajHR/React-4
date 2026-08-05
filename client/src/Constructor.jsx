import React, { Component } from 'react'

class Constructor extends Component {
  constructor(){
     super();
    //  console.log("I am Constructor Method")
    this.state = {
        name : "Alex Pandian"
    }
  }
  render() {
    console.log("I am render Method")
    return (
      <>
        <h2>Constructor || Life Cycle Method</h2>
        <h3>Hello {this.state.name} </h3>
      </>
    )
  }
}

export default Constructor
