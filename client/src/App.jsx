import React, { useState } from 'react'
import FuncComponent from './FuncComponent'
import ClassComponent from './ClassComponent'

import PassFuncProps from './PassFuncProps'
import New from './New'
import FormValidation from './FormValidation'
import Constructor from './Constructor'
import Render from './Render'
import ComponentDidMount from './ComponentDidMount'


const App = () => {
 
  return (
    <div>
        <h1>App</h1>
         <ComponentDidMount />
    </div>
  )
}

export default App