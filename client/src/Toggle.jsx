import React, { Component } from 'react'

class Toggle extends Component {
  componentWillUnmount(){
      alert("Component Will Mount")
  }
  render() {
    return (
      <>
        <h3>I am a Toggle Component</h3>
      </>
    )
  }
}

export default Toggle
