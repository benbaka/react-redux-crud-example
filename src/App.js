//import React, {Component} from 'react';
//import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
// import TutorialsList from './components/tutorials-list.component';
//import TutorialsList from './components/TutorialsList';
//import AddTutorial from "./components/AddTutorial";

import Login from './components/Login';
import TutorialsList from "./components/TutorialsList";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import Store from "./store";
//import AddTutorial from "./components/AddTutorial";

import { useSpring, animated } from 'react-spring'

const App = () => {
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })


    return (
        <Store>

        <Router>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={'/home'} className="navbar-brand">
                Home
            </Link>
            <div className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={"/home"} className="nav-link">
                        Page
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/newPost"} className="nav-link">
                        Add Post
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to={"/login"} className="nav-link">
                        Login
                    </Link>
                </li>
            </div>
        </nav>


        <Switch>
            <Route exact path={['/', '/home']} component={Home}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/newPost' component={NewPost} style={{props}}></Route>
            <Route path='/tutorials/:id' component={TutorialsList}></Route>

        </Switch>



    </Router>
        </Store>





    )
}

export default App;