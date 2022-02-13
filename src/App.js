// import logo from './logo.svg';
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
