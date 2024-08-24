import React from "react";
import { useState } from 'react';


export const Count =  () =>
{
    const [count, setCount] = useState(0);
    const setCounter = (btn) =>
    {
        if(btn === "btn1")
        {
            setCount(count+1);
        }
        else if(btn === "btn2")
        {
            if(count===0)
            {
                setCount(count);
            }
            else
            {
                setCount(count-1);
            }
        }
    }
    

    return (
        <div className="text-center">
            <h1 className="display-3">Count: {count}</h1>
            <button onClick={()=>setCounter("btn1")} className="btn btn-danger m-2 fs-5 w-25">+</button>
            <button onClick={()=>setCounter("btn2")} className="btn btn-danger m-2 fs-5 w-25">-</button>
        </div>
    );
}

export default Count;