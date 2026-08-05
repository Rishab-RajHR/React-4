import React, { useState } from 'react'
import FuncComponent from './FuncComponent'
import ClassComponent from './ClassComponent'

import PassFuncProps from './PassFuncProps'
import New from './New'

const App = () => {
  function getData(){
      alert("Hello From App.js")
  }
  return (
    <div>
        <h1>App</h1>
        <PassFuncProps data={getData}/>
        <New data={getData} />
    </div>
  )
}

export default App