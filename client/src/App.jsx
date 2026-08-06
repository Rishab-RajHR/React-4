import React, { useState } from 'react'
import FuncComponent from './FuncComponent'
import ClassComponent from './ClassComponent'
import GetSnapShotBeforeUpdate from './GetSnapShotBeforeUpdate'




const App = () => {
  // const [name, setName] = useState("Alex");
  return (
    <div>
        <h1>App</h1>
        <GetSnapShotBeforeUpdate />
         {/* <GetSnapShotBeforeUpdate data={name} /> */}
         {/* <button onClick={() => {setName("Allu")}}>Update Name</button> */}
    </div>
  )
}

export default App