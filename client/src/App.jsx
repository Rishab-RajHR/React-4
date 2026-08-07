import React, { useState } from 'react'
import PreviousProps from './PreviousProps'


function App() {
  const [data, setData] = useState(0);
  function updateData () {
      // setData(data + 1)
      let randomValue = Math.floor(Math.random()*10)
      setData(randomValue)
  }
  return (
    <div>
       <h2>App</h2>
       <PreviousProps item={data} />
       <button onClick={updateData}>Update</button>
    </div>
  )
}

export default App
