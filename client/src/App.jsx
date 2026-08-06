import React, { useState } from 'react'
import FuncComponent from './FuncComponent'
import ClassComponent from './ClassComponent'


import ComponentDidUpdate from './ComponentDidUpdate'


const App = () => {
 
  return (
    <div>
        <h1>App</h1>
        <ComponentDidUpdate />
    </div>
  )
}

export default App