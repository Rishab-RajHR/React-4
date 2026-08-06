import React, { useRef } from 'react'
import ChildForwarRef from './ChildForwarRef'

const ForwardRefHook = () => {
  let myRef = useRef();
  function updateInput (){
      myRef.current.value = "Alex Pandian";
      myRef.current.style.backgroundColor = "aqua";
      myRef.current.style.color = "red";
      myRef.current.focus();
  }
  return (
    <>
        <h2>ForwardRef Hook In ReactJS</h2>
        <ChildForwarRef ref={myRef}/>
        <button onClick={() => updateInput()}>Clicked</button>
    </>
  )
}

export default ForwardRefHook