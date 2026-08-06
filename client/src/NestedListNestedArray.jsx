import React from 'react'

import {Table} from 'react-bootstrap';

const NestedListNestedArray = () => {

   const employeeInfo = [
    {name: "Alex", email: "alex12@gmail.com", address: [
         {houseNo: "123", city: "Delhi", country: "India"},
         {houseNo: "456", city: "Columbo", country: "Sri Lanka"},
         {houseNo: "789", city: "Dhaka", country: "Bangladesh"},
    ]},
    {name: "Ram", email: "ram45@gmail.com", address: [
         {houseNo: "123", city: "Delhi", country: "India"},
         {houseNo: "456", city: "Columbo", country: "Sri Lanka"},
         {houseNo: "789", city: "Dhaka", country: "Bangladesh"},
    ]},
    {name: "Tovino", email: "tovino121@gmail.com", address: [
         {houseNo: "123", city: "Delhi", country: "India"},
         {houseNo: "456", city: "Columbo", country: "Sri Lanka"},
         {houseNo: "789", city: "Dhaka", country: "Bangladesh"},
    ]},
    {name: "Sridhar", email: "sri12@gmail.com", address: [
         {houseNo: "123", city: "Delhi", country: "India"},
         {houseNo: "456", city: "Columbo", country: "Sri Lanka"},
         {houseNo: "789", city: "Dhaka", country: "Bangladesh"},
    ]},
]

  return (
    <>
       <h2>NestedList With NestedArray In ReactJS</h2>
       <Table variant='dark' striped bordered striped>
        <thead>
          <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
          </tr>
        </thead>
        <tbody>
             {
                employeeInfo.map((item, i) => 
                   <tr key={i}>
                      <td> {i+1} </td>
                      <td> {item.name} </td>
                      <td> {item.email} </td>
                      <td> 
                         <Table variant='dark' striped bordered striped>
                          <tbody>
                         {
                             item.address.map((data, j) => <tr key={j}>
                                  <td> {data.houseNo} </td>
                                  <td> {data.city} </td>
                                  <td> {data.country} </td>
                              </tr>
                             )
                         }
                         </tbody>
                         </Table>
                      </td>
                   </tr>
                )
             }
        </tbody>
       </Table>
    </>
  )
}

export default NestedListNestedArray