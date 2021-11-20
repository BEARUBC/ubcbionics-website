// import logo from './logo.svg';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Grasp from "./Grasp";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Homepage /> 
        </Route>  
        <Route path="/grasp">
          <Grasp />
        </Route>
      </Switch>
      </div>
    </Router>
   
  );
}

export default App;
