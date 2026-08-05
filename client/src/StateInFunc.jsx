import React, { useState } from "react";

function StateInFunc(){
  //  const [name, setName] = useState("Basil"); 
   const [name, setName] = useState(0); 
   function updateName(){
      //  setName("Alex Pandian");
      setName(name+1);
   }
   console.log("Rendering");
    return (
        <div>
            <h2>{name}</h2>
            <button onClick={updateName}>Click Me</button>
        </div>
    )
}

export default StateInFunc