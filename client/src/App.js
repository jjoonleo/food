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
import AddRestaurant from './routes/AddRestaurant';

function App() {
  return (
    <Router>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/addRestaurant" element={<AddRestaurant/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
