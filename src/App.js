// import logo from './logo.svg';
<<<<<<< HEAD
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
=======
import React, { Component } from 'react';
// import Navbar from "./components/Navbar/Navbar";
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Grasp } from './Grasp';
import { Navbar } from './components/Navbar'
import { Layout } from './components/Layout';
import { Joinus } from './Joinus';
import { Teams } from './Teams';
import { Sponsor } from './Sponsor';
import { Admin } from './subTeams/Admin'

>>>>>>> 8e9aea53b732827fd386afb5552d6d8efddf75f1


<<<<<<< HEAD
      <p className="text">
        A STUDENT-LED DESIGN TEAM STRIVING TO FOSTER <br />
        EXCELLENCE IN BIONICS BY CREATING SOLUTIONS <br /> TO REPLACE HUMAN
        PHYSIOLOGY AND ULTIMATELY <br /> IMPROVE QUALITY OF LIFE.
      </p>

      <div className="partTwo">
        <span className="header">UPDATES</span>
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
      <p className="graspText">
        The demand for prostheses is universal--over one million amputations
        occur annually, with prosthetic options available only <br /> to about
        5% of the population. UBC Bionics was created to foster undergraduate
        excellence in this field. We undertook the <br /> project of creating a
        bionic arm and completed an initial prototype in 2019-2020. During the
        pandemic, we updated our <br />
        design and plan on implementing the physical changes this year.
      </p>

      <img class="picOne" src="pic1.png" />

      <img class="picTwo" src="pic2.png" />

      <div class="footer">
        <span class="bionics">UBC BIONICS</span>
        <span class="contact">CONTACT US</span>
        <div class="images">
          <a href="https://www.facebook.com/ubcbionicsteampage/">
            <img
              class="facebook"
              src="facebook-icon.png"
              width="28"
              height="28"
            ></img>
          </a>
          <a href="https://www.instagram.com/ubcbionicsteam/">
            <img
              class="instagram"
              src="instagram.png"
              width="28"
              height="28"
            ></img>
          </a>
          <a href="https://twitter.com/ubcbionics?lang=en">
            <img class="twitter" src="twitter.png" width="28" height="28"></img>
          </a>

          <a href="https://www.linkedin.com/company/ubcbionicsteam/?originalSubdomain=ca">
            <img
              class="linkedin"
              src="linkedin-icon.png"
              width="30"
              height="30"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
=======
class App extends Component {
  render() {
      return(
        <>
        {/* <Layout> */}
          <Router>
            <Navbar />
            <div className="App">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/grasp" component={Grasp} />
              <Route exact path="/teams" component={Teams} />
              <Route path="/join" component={Joinus} />
              <Route path="/sponsor" component={Sponsor} />
              <Route path="/teams/admin" component={Admin} />
            </Switch>
            </div>
          </Router>
        {/* </Layout> */}
        </>
    );
  }
>>>>>>> 8e9aea53b732827fd386afb5552d6d8efddf75f1
}
export default App;

// function App() {
//   return (
//     <Router>
//       <div className="App">
//       <Navbar />
//       <Switch>
//         <Route exact path="/">
//           <Homepage /> 
//         </Route>  
//         <Route path="/grasp">
//           <Grasp />
//         </Route>
//         <Route path="/contactform">
//           <ContactForm />
//         </Route>
//       </Switch>
//       </div>
//     </Router>
   
//   );
// }

// export default App;
