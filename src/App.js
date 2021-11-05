// import logo from './logo.svg';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <img class="hola" src="hand.png" width="400" height="400" />
      <b><div class="heading">UBC BIONICS</div></b>
      {
        // <img class="hola" src="hand.png" width="450" height="450" />

        /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
      }

      <p>
        A STUDENT-LED DESIGN TEAM STRIVING TO FOSTER <br />
        EXCELLENCE IN BIONICS BY CREATING SOLUTIONS <br /> TO REPLACE HUMAN
        PHYSIOLOGY AND ULTIMATELY <br /> IMPROVE QUALITY OF LIFE.
      </p>
    </div>
  );
}

export default App;
