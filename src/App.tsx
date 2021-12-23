import React from 'react';
import "./App.css"

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './views/Home';
import Details from './views/Details';

function App() {
  return (
    <div  className="App">
      <Router>
      <Routes>
          <Route element={<Details />} path="/details/:title">
           
          </Route>
          
          <Route element={<Home />} path="/">
            
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
