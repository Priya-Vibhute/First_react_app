import { useCallback, useEffect, useState } from "react";

function AreaOfRectangle() {

    const [length,setLength]=useState(0);
    const[breadth,setBreadth]=useState(0);
    const[area,setArea]=useState(0);

   const calculateArea= useCallback(()=>{

         setArea(length*breadth);
    },[length,breadth]);

   useEffect(()=>{
    calculateArea()},[length,breadth])

    return (
        <div class="card text-white bg-dark mb-3" >
            <div class="card-body">
                <h5 class="card-title">Area of Rectangle {area}</h5>
                <div class="input-group">
                    <span class="input-group-text">Length and breadth</span>

                    <input type="text" aria-label="First name" class="form-control" 
                    placeholder="length"
                    value={length} onChange={(e)=>setLength(e.target.value)}/>

                    <input type="text" aria-label="Last name" class="form-control"
                     placeholder="breadth" 
                     value={breadth} onChange={(e)=>setBreadth(e.target.value)}/>
                </div>
            </div>
        </div>
    );
}

export default AreaOfRectangle;