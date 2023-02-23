import "./App.css";
import axios from "axios";
import React, {useState, useEffect} from 'react';

function App() {
  const [err, setErr] = useState(null);
    

  const test = async () => {
    console.log("getting today ticket");
    const res = await axios.get("/api/hi");
    console.log(res);
    if(res.data.err){
        console.log(res.data.err);
        setErr(err.data.err);
    }
  }

  useEffect(()=>{
    test();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!123!!!</h1>
        <h1>text for testing server</h1>
      </header>
    </div>
  );
}

export default App;
