import React, { useState } from 'react'
import Hooks from './Hooks'
import UseEffect from './UseEffect'
import UseEffectProps from './UseEffectProps'

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
        <h1>App</h1>
        <UseEffectProps data={count} />
        <button onClick={() => setCount(count + 1)}>Counter</button>
    </div>
  )
}

export default App