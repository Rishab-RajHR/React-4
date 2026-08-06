import React, { useEffect } from 'react'

const UseEffectConditions = (props) => {
  // const [age, setAge] = useState(22);
  // const [count, setCount] = useState(0);

  // useEffect With State
  // useEffect(() => {
  //     console.log("UseEffect Hook With Count " ,count)
  // }, [count])
  // useEffect(() => {
  //     console.log("UseEffect Hook With Age State ", age)
  // }, [age])


  // useEffect With Props
  useEffect(() => {
      console.log("UseEffect Hook With Count ", props.count)
  }, [props.count])

  useEffect(() => {
      console.log("UseEffect hook With Age ", props.age)
  }, [props.age])


  return (
    <>
       <h2> UseEffect Hook Specific States & Props </h2>
       {/* <h3>Age: {age} </h3>
       <h3>Count: {count} </h3>
       <button onClick={() => setAge(age + 1)}>Update Age</button>
       <button onClick={() => setCount(count + 1)}>Update Count</button> */}

       <h3>Age: {props.age} </h3>
       <h3>Count: {props.count} </h3>
    </>
  )
}

export default UseEffectConditions