import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Employee = () => {
   const location = useLocation();
  console.log(location);
   const {name, age} = useParams();
  return (
    <>
        <h2>{name} is a Employee and his age is {age}</h2>
    </>
  )
}

export default Employee