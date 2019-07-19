import { BrowserRouter as Router, Route } from "react-router-dom";

import React from 'react';
import logo from './logo.svg';
import './App.css';
import testPage from './pages/testPage'


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={testPage}></Route>

      </div>
    </Router>
  );
}

export default App;
