import React, { useEffect, useRef } from 'react'

const PreviousProps = (prop) => {
  let prevValue = useRef();
  useEffect(() => {
       prevValue.current = prop.item
  })
  const prevProp = prevValue.current;
  return (
    <>
       <h2>Previous Props In React JS </h2>
       <h3>Current Value: {prop.item} </h3>
       <h3>Previous Value: {prevProp} </h3>
    </>
  )
}

export default PreviousProps