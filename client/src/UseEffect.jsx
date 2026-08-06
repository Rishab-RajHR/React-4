import React, { useEffect, useState } from 'react'

function UseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("UseEffect Hook In React")
  })
  return (
    <>
      <h2>UseEffect Hook</h2>
      <h3>Count: {count} </h3>
      <button onClick={()=> setCount(count + 1)}>Counter</button>
    </>
  )
}

export default UseEffect
