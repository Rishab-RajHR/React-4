import React, { useState } from 'react'
import FuncComponent from './FuncComponent'
import ClassComponent from './ClassComponent'
import JSX from './JSX'
import ClickEvent from './ClickEvent'
import StateInFunc from './StateInFunc'
import StateInClass from './StateInClass'
import PropsInFunction from './PropsInFunctional'
import PropsInClass from './PropsInClass'
import GetInputValue from './GetInputValue'
import HideShowTog from './HideShowTog'

const App = () => {
  return (
    <div>
        <h1>App</h1>
        <HideShowTog />
    </div>
  )
}

export default App