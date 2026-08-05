import React from 'react'
import FuncComponent from './FuncComponent'
import ClassComponent from './ClassComponent'
import JSX from './JSX'
import ClickEvent from './ClickEvent'

const App = () => {
  return (
    <div>
        <h1>App</h1>
        <FuncComponent/>
        <ClassComponent />
        <JSX />
        <ClickEvent />
    </div>
  )
}

export default App