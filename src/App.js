import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import NavBar from "./components/NarBar/NavBar";
import Home from "./components/NarBar/elements/Home";
import About from "./components/NarBar/elements/About";
import Services from "./components/NarBar/elements/Services";
import ContactUs from "./components/NarBar/elements/ContactUs";

import "./App.css";

const App = () => {
  return (
    <Router>
      <section className="mainWrapper">
        <NavBar />
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
        </Switch>
      </section>
    </Router>
  );
};

export default App;
