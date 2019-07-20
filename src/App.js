

import { BrowserRouter as Router, Route } from "react-router-dom";

import React from 'react';
import logo from './logo.svg';
import './App.css';
import testPage from './pages/testPage'
import welcome from './pages/welcome'


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={welcome}></Route>

      </div>
    </Router>
  );
}

export default App;
