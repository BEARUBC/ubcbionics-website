import "./App.css";
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Grasp } from './Grasp';
import { Navbar } from './components/Navbar'
import { Joinus } from './Joinus';
import { Teams } from './Teams';
import { Sponsor } from './Sponsor';
import { Footer } from './components/Footer'
import { Mailer } from './Mailer'



class App extends Component {
  render() {
      return(
        <>
          <Router>
            <Navbar />
            <div className="App">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/grasp" component={Grasp} />
              <Route exact path="/teams" component={Teams} />
              <Route path="/join" component={Joinus} />
              <Route path="/sponsor" component={Sponsor} />
              <Route path='/contactform' component={Mailer} />
            </Switch>
            </div>
            <Footer />
          </Router>
        </>
    );
  }
}

export default App;