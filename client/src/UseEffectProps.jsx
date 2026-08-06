import React, { useEffect } from 'react'

function UseEffectProps(props) {
  useEffect(() => {
      console.log("UseEffect Hooks with Props", props)
  })
  return (
    <>
      <h2>UseEffect Hooks with Props</h2>
      <h3>Count: {props.data} </h3>
    </>
  )
}

export default UseEffectProps
