import React, { createContext, useState } from 'react'
import FirstChild from './FirstChild'
import ChildA from './ChildA';

// Create, Provide, Use

export const myData = createContext();

const UseContextHook = () => {
   const [data, setData] = useState(1);
   const [salary, setSalary] = useState(1);

   const getSalary = (val) => {
       console.log("Salary is: ", val);
       setSalary(val);
   }
  return (
    <myData.Provider value={{ valueData: data, getSalary: getSalary }} >
     <>
      <h2>UseContext Hook In React JS</h2>
      <h2>Salary From Super Child: {salary} </h2>
      <button onClick={() => setData(data + 1)}>Update Data</button>
      <FirstChild />
      <ChildA />
     </>
    </myData.Provider>
  )
}

export default UseContextHook