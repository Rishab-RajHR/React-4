import React, {Component} from "react";
class StateInClass extends Component {
  constructor() {
      super();
      this.state = {
          // name : "Gurinder"
          name : 0
      }
  }

  updateName(){
      // alert("Hii")
      // this.setState({name : "Alex Pandian"})
      this.setState({name : this.state.name+1})
  }
    render(){
       return(
          <div>
              <h2>{this.state.name}</h2>
              <button onClick={()=> this.updateName()}>Click me</button>
          </div>
       )
    }
}

export default StateInClass;