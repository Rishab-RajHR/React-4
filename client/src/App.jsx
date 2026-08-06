import React, { useState } from 'react'
import FuncComponent from './FuncComponent'
import ClassComponent from './ClassComponent'

import ShouldComponentUpdate from './ShouldComponentUpdate'


const App = () => {
 
  return (
    <div>
        <h1>App</h1>
        <ShouldComponentUpdate />
    </div>
  )
}

export default App