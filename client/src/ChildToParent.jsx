import React from 'react'

const ChildToParent = (prop) => {
  // let user = "Pandian";
  // let user = ["Alex", "al12@gmail.com", 1234]
  let user = {name:"Basil", email: "basil12@gmail.com", contact: 12345}
  return (
    <>
     {/* <h2>Name: </h2> */}
     <button onClick={() => prop.item(user)}>Click</button>
    </>
  )
}

export default ChildToParent