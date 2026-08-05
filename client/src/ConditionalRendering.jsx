import { useState } from "react";

function ConditionalRendering() {
  //  const [vote, setVote] = useState(true);
  const [age, setAge] = useState(20);

    // Not Recommended
  //  if(vote) {
  //      return(
  //       <div>
  //           <h2>You can Vote</h2>
  //       </div>
  //   )
  //  }
  //  else{
  //     return(
  //         <div>
  //             <h2>You Cannot Vote</h2>
  //         </div>
  //     )
  //  }

    // Short Circuit Operator

    // return(
    //     <div>
    //         { vote && <h2>You Can Vote</h2>}
    //     </div>
    // )


    // Ternary Operator

    return(
       <div>
           {/* {
              age > 18 ? <h2>Your Age is Greater than 18</h2> : <h2>Your Age is less than 18</h2>
           } */}
           {
              age == 10 ? <h2>You are a kid</h2> : age == 20 ? <h2>You are young</h2> : age == 30 ? <h2>Your age is 30</h2> : <h2>Your age is old</h2>
           }
       </div>
    )

}

export default ConditionalRendering;