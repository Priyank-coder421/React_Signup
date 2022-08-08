import './App.css';
import React from 'react';
import Personal from './components/Personal';
import Signup from './components/Signup';
import { Bank } from './components/Bank';
import { Businessinfo } from './components/Businessinfo';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    
    <Router>
    <Routes>
        <Route
          exact
          path="/"
          element={<Signup/>}/>
        <Route
          exact
          path="/personal"
          element={<Personal/>}
        />
        <Route
          exact
          path="/businessinfo"
          element={<Businessinfo/>}
        />
        <Route
          exact
          path="/bank"
          element={<Bank/>}
        />
        </Routes>
    </Router>
  
  );
}
export default App;
