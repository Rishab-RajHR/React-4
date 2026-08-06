import React, { Component } from 'react'
import Toggle from './Toggle'

class UnMount extends Component {
  constructor() {
     super();
     this.state = {
         show: true
     }
  }
  render() {
    return (
      <>
         <h2>Component Will UnMount || Life Cycle Method</h2>
         {
            this.state.show ?  <Toggle /> : <h3>Toggle Component Removed</h3>
         }
         <button onClick={() => {this.setState({show: !this.state.show})}}>Toggle Button</button>
        
      </>
    )
  }
}

export default UnMount
