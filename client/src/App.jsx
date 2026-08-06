import React, { Component } from 'react'
import PureComponents from './PureComponents'

class App extends Component {
  constructor() {
     super();
     this.state = {
        count : 0
     }
  }
  render() {
    return (
      <div>
         <h1>App File</h1>
         <PureComponents count={this.state.count} />
         <button onClick={() => this.setState({count : 1})}>Counter</button>
      </div>
    )
  }
}

export default App
