// import logo from './logo.svg';
import './App.css';

// function AppOld() {
//   return (
//     <div className="AppOld">
//       <header className="AppOld-header">
//         <img src={logo} className="AppOld-logo" alt="logo" />
//         <p>
//           Edit <code>src/AppOld.js.js</code> and save to reload.
//         </p>
//         <a
//           className="AppOld-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
//

import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
// import TutorialsList from './components/tutorials-list.component';
import TutorialsList from './components/TutorialsList';
import AddTutorial from "./components/AddTutorial";

class AppOld extends Component{

  render(){

    return(
        <Router>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={'/tutorials'} className="navbar-brand">
              All Tutorials
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                  Products
              </Link>
            </li>
              <li className="nav-item">
                  <Link to={"/add"} className="nav-link">
                      Add
                  </Link>
              </li>
          </div>
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={['/', '/tutorials']} component={TutorialsList}></Route>
              <Route exact path='/add' component={AddTutorial}></Route>
              <Route path='/tutorials/:id' component={TutorialsList}></Route>

            </Switch>
          </div>


        </Router>

    )

  }

}

export default AppOld;
