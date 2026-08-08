import React, { useState } from 'react'

const Controlled = () => {
  const [item, setItem] = useState("");
  return (
    <>
       <h2>Controlled Components In React JS</h2>
      {/* <input type='text' value={item} onChange={(e) => setItem(e.target.value)} /> */}
      <input type='text' defaultValue="Tovino" onChange={(e) => setItem(e.target.value)} />

      <h3>Value: {item} </h3>
    </>
  )
}

export default Controlled