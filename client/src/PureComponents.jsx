import React, { PureComponent } from 'react'

class PureComponents extends PureComponent {
  // constructor() {
  //     super();
  //     this.state = {
  //         count: 0
  //     }
  // }
  render() {
    console.log("Re rendering");
    return (
      <>
         <h2>Pure Components In React </h2>
         {/* <h3>Count: {this.state.count} </h3> */}
         {/* <button onClick={() => this.setState({count : 1})}>Counter</button> */}
         <h3>Count: {this.props.count} </h3>
      </>
    )
  }
}

export default PureComponents
