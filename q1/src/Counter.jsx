import React,{useState} from "react";
function Counter(){
    const [number,setNumber]=useState(0);
        const increment=()=>{
        setNumber(number+1)
    }
        const decrement=()=>{
        setNumber(number-1)
    }
    const reset=()=>{
        setNumber(0)
    }


    return(
        <div>
            <h3>Number:{number}</h3>
            <button onClick={increment}>Increase</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>Decrease</button>
        </div>
    )
}
export default Counter;