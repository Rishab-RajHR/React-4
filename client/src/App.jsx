import React, { useState } from 'react'
import FuncComponent from './FuncComponent'
import ClassComponent from './ClassComponent'
import GetSnapShotBeforeUpdate from './GetSnapShotBeforeUpdate'
import UnMount from './UnMount'




const App = () => {
  
  return (
    <div>
        <h1>App</h1>
        <UnMount />
    </div>
  )
}

export default App