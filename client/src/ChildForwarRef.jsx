import React, { forwardRef } from 'react'

const ChildForwarRef = (props, ref) => {
  return (
    <>
        <h2>ChildForwarRef In React</h2>
        <input type='text' ref={ref}/>
    </>
  )
}

export default forwardRef(ChildForwarRef);