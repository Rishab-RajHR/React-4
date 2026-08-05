import React from 'react'

const PassFuncProps = (props) => {
  return (
    <div>
       <h2>Pass Functions as a Props</h2>
       {/* <button onClick={props.data}>Get Your Data</button> */}
       <button onClick={() => props.data()}>Get Your Data</button>
    </div>
  )
}

export default PassFuncProps