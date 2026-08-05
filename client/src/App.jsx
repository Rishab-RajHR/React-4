import React, { useState } from 'react'
import FuncComponent from './FuncComponent'
import ClassComponent from './ClassComponent'
import JSX from './JSX'
import ClickEvent from './ClickEvent'
import StateInFunc from './StateInFunc'
import StateInClass from './StateInClass'
import PropsInFunction from './PropsInFunctional'

const App = () => {
  const [firstName, setName] = useState("Tillu");
  return (
    <div>
        <h1>App</h1>
        <PropsInFunction name={firstName} />
        <button onClick={() => {setName('Alex Pandian')}}>Click Me</button>
    </div>
  )
}

export default App