import React from 'react'
import ChildToParent from './ChildToParent'

const LiftingStateUp = () => {
  // let user = "Alex";
  

  function sayHello(n) {
    //  alert("hello " + n)
    console.log(n);
  }
  return (
    <>
       <h2>Lifting State Up In React</h2>
       {/* <ChildToParent item={user} /> */}
       <ChildToParent item={sayHello}/>
    </>
  )
}

export default LiftingStateUp
