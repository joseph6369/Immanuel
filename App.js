// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import Explore from './Explore';
import About from './About';
import Contact from './Contact';
import NewDelhi from './NewDelhi';
import TajMahal from "./TajMahal"
import Munnar from "./Munnar"
import Goa from "./Goa"
import Kerala from "./Kerala"
import Mysore from "./Mysore"
import Kodai from "./Kodai"
import Niligris from "./Niligris"
import Booked from "./Booked"
import EndHome from "./EndHome"


import "./App.css"

const App = () => {
  return (
    <Router>
      <div class="parent-app">
        <nav class="">
         
              <Link class="App-link" to="/">Home</Link>
        
              <Link class="App-link" to="/explore">Explore</Link>
          
              <Link class="App-link" to="/about">About</Link>
          
              <Link class="App-link" to="/contact">Contact</Link>
              <img class="icon-app" src="home.png"/>
              <img class="icon-app1" src="loupe.png"/>
              <img class="icon-app2" src="phone.png"/>
              <img class="icon-app3" src="about.png"/>
              <img class="icon-app4" src="menu.png"/>
              
           
          
        
        </nav>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newdelhi" element={<NewDelhi />} />
          <Route path="/tajmahal" element={<TajMahal />} />
          <Route path="/munnar" element={<Munnar />} />
          <Route path="/goa" element={<Goa />} />
          <Route path="/kerala" element={<Kerala />} />
          <Route path="/mysore" element={<Mysore />} />
          <Route path="/kodai" element={<Kodai />} />
          <Route path="/niligris" element={<Niligris />} />
          <Route path="/booked" element={<Booked />} />
          <Route path="/EndHome" element={<EndHome />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
