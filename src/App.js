

import { BrowserRouter as Router, Route } from "react-router-dom";

import React from 'react';
import logo from './logo.svg';
import './App.css';
import welcome from './pages/welcome'
import ColorTest from './pages/colortest'
import Survey from './pages/survey'



function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={welcome}></Route>
        <Route exact path="/TestStart" component={ColorTest}></Route>
        <Route exact path="/survey" component={Survey}></Route>


      </div>
    </Router>
  );
}

export default App;
