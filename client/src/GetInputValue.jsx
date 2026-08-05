import { useState } from "react"

function GetInputValue() {
   const [data, setData] = useState(null);
   const [print, setPrint] = useState(false);
   function getValue(val) {
      // console.log(val.target.value)
      setData(val.target.value);
      setPrint(false);
   }
    return(
        <div>
          {
              print ? <h2>{data}</h2> : null
          }
            
            <input type="text" onChange={getValue}></input>
            <button onClick={() => setPrint(true)}>Display Value</button>
        </div>
    )
}
export default GetInputValue