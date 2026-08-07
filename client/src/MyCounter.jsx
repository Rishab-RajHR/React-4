import React from 'react'
import useCount from './useCount'

const MyCounter = () => {
  // const [count, setCount] = useState(0);
  // const increment = () => {
  //      setCount(count + 1)
  // }
  // const decrement = () => {
  //     setCount(count - 1)
  // }
  const [count, decrement, increment] = useCount(0);
  return (
    <>
        <h2>Custom Hooks In React JS</h2>
        <h3>Count: {count}</h3>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default MyCounter