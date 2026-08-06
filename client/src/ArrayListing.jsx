import React from 'react'

const ArrayListing = () => {
  // const employees = ["Alex", "Tovino", "Ram", "Basil"];

  // Using map function
  // employees.map((item) => {
  //     console.log("My Name Is: ", item);
  // })

 // Using for loop
//  for(let i=0; i<employees.length; i++) {
//     console.log("My Name Is: ", employees[i]);
//  }

const employeeInfo = [
    {name: "Alex", email: "alex12@gmail.com", contact: 12345},
    {name: "Ram", email: "ram45@gmail.com", contact: 45766},
    {name: "Tovino", email: "tovino121@gmail.com", contact: 98638},
    {name: "Sridhar", email: "sri12@gmail.com", contact: 666782},
]

  return (
    <>  
       {/* Inside JSX we cna't use for loop */}
       {/* Map function returns the new Array */}
       <h2>ArrayListing With Map Function</h2>
       {/* {
           employees.map((item) => 
             <h3> {item} </h3>
          )
       } */}

       <table border={1}>
        <thead>
            <tr>
               <td>Name</td>
               <td>Email</td>
               <td>Contact</td>
            </tr>
        </thead>
        <tbody>
           {
               employeeInfo.map((emp) => 
               <tr key={emp.email}>
                   <td> {emp.name} </td>
                   <td> {emp.email} </td>
                   <td> {emp.contact} </td>
               </tr>
              )
           }
         </tbody>
       </table>
      
    </>
  )
}

export default ArrayListing