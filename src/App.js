import React, { Component } from 'react';
import './App.css';
//import Home from './components/Home/Home';
import {
  Route,
  BrowserRouter,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from "./components/Home/Home";
import Stuff from "./components/Home/Stuff";
import About from "./components/about/about";


//import Stuff from "./Stuff";
//import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div>
          <h1>Simple Menu</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
          </ul>

          <div className="content">
            <Route path="/" component={Home}/>
          </div>

          <ul className="header">
            <li><NavLink to="/stuff">Stuff</NavLink></li>
          </ul>


          <div className="content">
            <Route path="/stuff" component={Stuff}/>
          </div>

            <ul className="header">
            <li><NavLink to="/about">About</NavLink></li>
          </ul>


          <div className="content">
            <Route path="/about" component={About}/>
          </div>
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
