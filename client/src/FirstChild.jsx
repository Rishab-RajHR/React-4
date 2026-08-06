import React, { useContext } from 'react'
import SecondChild from './SecondChild'
import { myData } from './UseContextHook'

const FirstChild = () => {
  const {valueData} = useContext(myData);
  return (
    <>
       <h2>FirstChild</h2>
       <h2>Value Data in First Child: {valueData} </h2>
       <SecondChild />
    </>
  )
}

export default FirstChild