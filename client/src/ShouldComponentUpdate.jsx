import React, { Component } from 'react'

class ShouldComponentUpdate extends Component {
  constructor() {
      super();
      this.state = {
         count: 0
      }
  }
  shouldComponentUpdate(){
     console.log("Should Component Update", this.state.count)
    //  return true;
    if (this.state.count > 5 && this.state.count < 10) {
        return true;
    }
  }
  render() {
    return (
      <>
        <h2>Should Component Update ||  LifeCycle Method </h2>
        <h2>Count: {this.state.count} </h2>
        <button onClick={() => {this.setState({count: this.state.count + 1})}}>Click Me</button>
      </>
    )
  }
}

export default ShouldComponentUpdate
