

import { BrowserRouter as Router, Route } from "react-router-dom";

import React from 'react';
import logo from './logo.svg';
import './App.css';
import welcome from './pages/welcome'
import ColorTest from './pages/colortest'
import FontTest from './pages/fonttest'
import Survey from './pages/survey'
import Report from './pages/personalinfo'
import Transition from './pages/transition'



function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={welcome}></Route>
        <Route exact path="/colors" component={ColorTest}></Route>
        <Route exact path="/transition" component={Transition}></Route>
        <Route exact path="/fonts" component={FontTest}></Route>
        <Route exact path="/survey" component={Survey}></Route>
        <Route exact path='/report' component={Report}></Route>


      </div>
    </Router>
  );
}

export default App;
