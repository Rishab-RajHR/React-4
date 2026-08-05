import React, { useState } from 'react'
import FuncComponent from './FuncComponent'
import ClassComponent from './ClassComponent'
import JSX from './JSX'
import ClickEvent from './ClickEvent'
import StateInFunc from './StateInFunc'
import StateInClass from './StateInClass'
import PropsInFunction from './PropsInFunctional'
import PropsInClass from './PropsInClass'

const App = () => {
  const [firstName, setState] = useState("Aman");
  return (
    <div>
        <h1>App</h1>
        <PropsInClass name={firstName} email={"til12@gmail.com"}/>
        <button onClick={() => setState("Alex Pandian")}>Click Me</button>
    </div>
  )
}

export default App