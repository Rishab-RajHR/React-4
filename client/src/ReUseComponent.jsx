import React from 'react'
import Employee from './Employee'

const ReUseComponent = () => {
  const employeeInfo = [
    {name: "Alex", email: "alex12@gmail.com", contact: 12345},
    {name: "Ram", email: "ram45@gmail.com", contact: 45766},
    {name: "Tovino", email: "tovino121@gmail.com", contact: 98638},
    {name: "Sridhar", email: "sri12@gmail.com", contact: 666782}
  ] 
  return (
    <>
       <h2>ReUseComponent</h2>
       {
           employeeInfo.map((item, i) => {
               <Employee data={item} />
           })
       }
    </>
  )
}

export default ReUseComponent