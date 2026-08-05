function ClickEvent(){
   let firstName = "Alex";
   function sayHello(){
      // alert("Hello");
      firstName = "Tovino"
      alert(firstName);
   }
    return (
        <div>
           <h2>{firstName}</h2>
           {/* <button onClick={sayHello}>Click Me</button> */}
           {/* <button onClick={alert("Alex")}>Click Me</button> */}
           <button onClick={() => alert("Alex")}>Click Me</button>
        </div>
    )
}
export default ClickEvent;