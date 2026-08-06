import React, { memo } from 'react'

const ExampleUseCallback = (props) => {
  console.log("Hello I am Child Component", props);
  return (
    <>
     <h3>Item: {props.item} </h3>
    </>
  )
}

export default memo(ExampleUseCallback);