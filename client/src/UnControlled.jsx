import React, { useRef } from 'react'

const UnControlled = () => {
  let myRef = useRef(null);
  function myForm(e) {
       e.preventDefault();
       console.log("First Input: " + myRef.current.value)
       let val = document.getElementById('myId').value;
       console.log("Second Input: " + val);
  }
  return (
    <>
       <h2>UnControlled Components In React JS</h2>
       <form onSubmit={myForm}>
           <input type='text' ref={myRef} /> <br/><br/>
           <input type='text' id='myId' /> <br/><br/>
           <button>Submit</button>
       </form>
    </>
  )
}

export default UnControlled