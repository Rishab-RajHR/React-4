import React, { useState } from 'react'
import UseEffectConditions from './UseEffectConditions'

const App = () => {
  const [age, setAge] = useState(22);
  const [count, setCount] = useState(0);
  return (
    <div>
        <h1>App</h1>
        <UseEffectConditions age={age} count={count} />
        <button onClick={() => setAge(age + 1)}>Update Age</button>
        <button onClick={() => setCount(count + 1)}>Update Count</button>
    </div>
  )
}

export default App