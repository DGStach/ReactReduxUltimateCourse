import {useState} from "react";

function App() {
    const [advice, setadvice] = useState("")
  async function getAdvice(){
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await  res.json()
      setadvice(data.slip.advice);
  }
  return (
    <div className="App">
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
    </div>
  );
}

export default App;
