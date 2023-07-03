import {useState} from "react";

function App() {
    const [advice, setadvice] = useState("");
    const [count, setCount] = useState(0);
  async function getAdvice(){
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await  res.json()
      setadvice(data.slip.advice);
    setCount((c)=>c+1)
  }
  return (
    <div className="App">
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
        <p>
            You have read <strong>{count}</strong> pieces of advaice.
        </p>
    </div>
  );
}

export default App;
