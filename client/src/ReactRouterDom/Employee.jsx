import React from 'react'
import { useParams } from 'react-router-dom'

const Employee = () => {
   const {name, age} = useParams();
  return (
    <>
        <h2>{name} is a Employee and his age is {age}</h2>
    </>
  )
}

export default Employee