import "./App.css";
import axios from "axios";
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from "./routes/Home";

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
    <Router>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
