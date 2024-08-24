import React ,{useEffect,useState} from "react";

export const Multi = () => {
    const [count, setCount] = useState(0);
    const [result, setResult] = useState(0);
    const setCounter= (btn) =>
    {
        if(btn === "inc")
        {
            setCount(count+1);
        }
        else if( btn === "dec")
        {
            if(count === 0)
            {
                setCount(count);
            }
            else{
                setCount(count-1);
            }
        }
    }

    useEffect(() => {
        setResult(count * 2); 
    }, [count]); 

    return (
        <div className="container mt-5 text-center">
            <h2>Result: {result}</h2>
            <button onClick={() => setCounter("inc")} className="btn btn-danger m-2 w-25">+</button>
            <button onClick={() => setCounter("dec")} className="btn btn-danger m-2 w-25">-</button>
        </div>
    );
}

export default Multi;