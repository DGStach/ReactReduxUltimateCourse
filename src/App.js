import {useEffect, useState} from "react";

function App() {
    const [advice, setadvice] = useState("");
    const [count, setCount] = useState(0);
  async function getAdvice(){
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await  res.json()
      setadvice(data.slip.advice);
    console.log("ile razy");
    setCount((c)=>c+1);
  }
  useEffect(function (){
      getAdvice();
  },[]);

  return (
    <div className="App">
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
    <Message count = {count}/>
    </div>
  );
}

function Message(props){
    return (
        <p>
            You have read <strong>{props.count}</strong> pieces of advaice.
        </p>
    )
}

export default App;
