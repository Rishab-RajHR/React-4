import React, { useContext } from 'react'
import { myData } from './UseContextHook'


const SecondChild = () => {
  const {valueData, getSalary} = useContext(myData);
  const salary = 50000;
  return (
    <>
      <h2>SecondChild</h2>
      <h2>Value Data in Second Child: {valueData} </h2>
      <button onClick={() => getSalary(salary)}>Salary</button>
    </>
  )
}

export default SecondChild