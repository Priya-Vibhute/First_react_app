import { useState } from "react";


function Counter() {

   
    let [counter,setCounter]=useState(0)
    let increment=()=>{setCounter(counter=counter+1);console.log(counter)}
    let decrement=()=>{setCounter(counter=counter-1);console.log(counter)}
    return (
        <div className="container mt-5">

            <h1 >Counter : {counter}</h1>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>

        </div>
    );
}

export default Counter;