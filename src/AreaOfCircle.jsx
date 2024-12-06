import { useCallback, useEffect, useState } from "react";



function AreaOfCircle() {

    const [radius, setRadius] = useState(0);
    const [area,setArea]=useState(NaN);

   const CalculateArea= useCallback(()=>{
        let area=Math.PI*radius*radius;
        setArea(area);
    },[radius])


    useEffect(()=>{
              CalculateArea();
    },[radius])

    return (
        <div class="card text-center">
            <div class="card-header">
                Featured
            </div>
            <div class="card-body">
                <h5 class="card-title">A=pi*r<sup>2</sup></h5>
                <h1>Area is {area.toFixed(2)}</h1>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="number" class="form-control w-50 center" value={radius}
                        id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="value"  onChange={(e)=>{setRadius(e.target.value)}}/>
                </div>

                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            <div class="card-footer text-muted">
                2 days ago
            </div>
        </div>
    );
}

export default AreaOfCircle;