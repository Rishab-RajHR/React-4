import React, { useState } from "react";
function HideShowTog(){
  const [result, setResult] = useState(true);
    return(
        <div>
            <h1>Hide Show and Toggle in React JS</h1>
            {
                result ?  <h3>Hello......</h3> : null
            }
           
            {/* <button style={{marginRight: "20px"}}  onClick={()=> setResult(false)}>Hide</button>
            <button onClick={()=> setResult(true)}>Show</button> */}
            <button onClick={()=> setResult(!result)}>Toggle</button>
        </div>
    )
}

export default HideShowTog;