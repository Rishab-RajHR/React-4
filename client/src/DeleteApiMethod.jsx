import React, { useEffect, useState } from 'react'

const DeleteApiMethod = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
     showList();
  }, [])

  const showList = () => {
          fetch("http://localhost:3002/users").then((result) => {
          result.json().then((response) => {
              setData(response);
          })
       })
  }

  const deleteRecord = (userId) => {
      // console.log(userId);
      fetch(`http://localhost:3002/users/${userId}`, {
           method: 'DELETE'
      }).then((result) => {
          result.json().then((response) => {
              console.log("Result: ", response)
              showList();
          })
      })
  }

  return (
    <>
        <h2>Delete API Method</h2>
        <table border='1'>
             <thead>
                 <tr>
                     <td>ID</td>
                     <td>Name</td>
                     <td>Age</td>
                     <td>Salary</td>
                     <td>Delete Record</td>
                 </tr>
             </thead>
             <tbody>
                {
             data.map((val, i) => {
             return (
             <tr key={i}>
                <td>{val.id}</td>
                 <td>{val.name}</td>
                 <td>{val.age}</td>
                 <td>{val.salary}</td>
                 <td><button onClick={() => deleteRecord(val.id)}>Delete</button></td>
            </tr>
              );
             })
            }
             </tbody>
        </table>
    </>
  )
}

export default DeleteApiMethod