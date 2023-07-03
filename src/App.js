import React, {useEffect, useState} from "react";

export default function App(){

    const [advice, setadvice] = useState("");
    const [count, setcount] = useState(0);

    async function getAdvice(){
        const res = await fetch("https://api.adviceslip.com/advice")
        const data = await res.json()
        setadvice(data.slip.advice);
        setcount((c)=>c+1);
    }

    useEffect(()=>{
        getAdvice()
    },[])

    return(
        <div>
            <h1>
                {advice}
            </h1>
            <button onClick={getAdvice}>Get Advice</button>
            <Count count = {count}/>
        </div>
    )
}

function Count(props){
    return (
        <div>
            <p>You use advice <strong>{props.count}</strong> times</p>
        </div>
        )
}
