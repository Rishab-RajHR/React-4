import React from 'react';
// import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const ArrayListingBootstrap = () => {

  const employeeInfo = [
    {name: "Alex", email: "alex12@gmail.com", contact: 12345},
    {name: "Ram", email: "ram45@gmail.com", contact: 45766},
    {name: "Tovino", email: "tovino121@gmail.com", contact: 98638},
    {name: "Sridhar", email: "sri12@gmail.com", contact: 666782},
]

  return (
    <>
       <h2>Array Listing With Bootstrap Table</h2>
      {/* <button type="button" class="btn btn-success" onClick={() => alert("Hello From Bootstrap")}>Success</button> */}
      
      <Table variant='dark' striped bordered hover>
        <tbody>
          {
             employeeInfo.map((item, i) => 
                <tr key={i}>
                    <td> {item.name} </td>
                    <td> {item.email} </td>
                    <td> {item.contact} </td>
                </tr>
            )
          }
          </tbody>
      </Table>
    </>
   )
}

export default ArrayListingBootstrap