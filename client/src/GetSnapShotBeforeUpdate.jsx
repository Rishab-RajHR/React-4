import React, { Component } from 'react'

class GetSnapShotBeforeUpdate extends Component {
  constructor() {
      super();
      this.state = {
         count: 0
      }
  }
  componentDidUpdate(prevProps, prevState, snapshot){
      //  console.log("Component Did Update", snapshot, this.props.data)
      console.log("Component Did Update", snapshot)
  }
  getSnapshotBeforeUpdate(preProps, preState) {
      // console.log("Get Snapshot Before Update")
      // return "Hello " + preProps.data
      // console.log("Get Snapshot Before Update", preState, this.state.count)
      return preState.count * 10;
  }
  render() {
    return (
      <>
         <h2>Get Snapshot Before Update || Lifecycle Method</h2>
         {/* <h3>Hello, {this.props.data} </h3> */}
         <h3>Count: {this.state.count} </h3>
         <button onClick={() => {this.setState({count: this.state.count + 1})}}>Update Count</button>
      </>
    )
  }
}

export default GetSnapShotBeforeUpdate
