import React, { useState } from 'react'
import FuncComponent from './FuncComponent'
import ClassComponent from './ClassComponent'

import PassFuncProps from './PassFuncProps'
import New from './New'
import FormValidation from './FormValidation'
import Constructor from './Constructor'
import Render from './Render'


const App = () => {
  const [name, setName] = useState("Alex");
  return (
    <div>
        <h1>App</h1>
         <Render data={name} />
         <button onClick={() => setName("Basil")}>Click Me</button>
    </div>
  )
}

export default App