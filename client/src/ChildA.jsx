import React, { useContext } from 'react'
import { myData } from './UseContextHook'

const ChildA = () => {
  const {valueData} = useContext(myData);
  return (
    <>
       <h2>Value Data in Child A: {valueData} </h2>
    </>
  )
}

export default ChildA