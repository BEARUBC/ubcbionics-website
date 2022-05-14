import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Grasp } from './Grasp';
import { Joinus } from './Joinus';
import { Teams } from './Teams';
import { Sponsor } from './Sponsor';
import { Footer } from './components/Footer'
import { Accordion } from './Accordion';
import { Navbar } from './components/NavBar/Navbar';



class App extends Component {
  render() {
      return(
        <>
          <Navbar />
          <Router>
            
            <div className="App">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/grasp" component={Grasp} />
              <Route exact path="/teams" component={Teams} />
              <Route path="/join" component={Joinus} />
              <Route path="/sponsor" component={Sponsor} />
              <Route path='/contactform' component={Accordion} />
            </Switch>
            </div>
          </Router>
          <Footer />
        </>
    );
  }
}

export default App;
