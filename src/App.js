// import logo from './logo.svg';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <img class="hola" src="hand.png" width="400" height="400" />
      <b>
        <div class="heading">UBC BIONICS</div>
      </b>
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

      <p className="text">
        A STUDENT-LED DESIGN TEAM STRIVING TO FOSTER <br />
        EXCELLENCE IN BIONICS BY CREATING SOLUTIONS <br /> TO REPLACE HUMAN
        PHYSIOLOGY AND ULTIMATELY <br /> IMPROVE QUALITY OF LIFE.
      </p>

      <div className="partTwo">
        <span className="header">UPDATES</span>
        <br />
        <br />
        <span className="header">MISSION</span>
        <br />
        <p>
          Amidst the increasing demand for bionic devices and UBC’s strategic
          positioning in the field, our student-led <br /> design team, UBC
          Bionics, strives to foster excellence in bionics. Our ultimate goal is
          to create solutions that <br /> can replace human physiology, either
          by prosthesis or implants. UBC Bionics' current project is to design
          and <br /> build a smart bionic hand, GRASP, that can be used by
          individuals who have suffered amputation or congenital
          <br /> birth defects. Join us on our journey and be a part of our
          history! <br />
          <br />
        </p>
        <span className="header">RESEARCH TEAM</span> <br />
        <p>
          We are delighted to announce the recent addition of a brand new
          research team to the UBC Bionics Team. <br />
          This research team will collaborate on a collection of smaller group
          projects with UBC professors and <br /> graduate students, that will
          help members develop skills to aid to the advancement of our current
          project,
          <br />
          GRASP. For more details, view our FAQ section under the Join Us page!
        </p>
      </div>

      <div class="headingGrasp">GRASP PROJECT</div>
    </div>
  );
}

export default App;
