import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Technologies from "./pages/Technologies/Technologies";
import Portfolio from "./pages/Portfolio/Portfolio";
import TheGarage from "./pages/Portfolio/TheGarage"
import Contact from "./pages/contact/Contact";
import Sidebar from "./components/sidebar/Sidebar";
import MobileMenu from "./pages/MobileMenu";
import "./App.css";
import DateObject from "react-date-object";

function App() {
  const date = new DateObject()
  const year = date.format("YYYY")
  return (
    <div className="container-grid">
      <Sidebar />

      <div className="pages">
        <Landing />
        <About />
        <Technologies />
        <Portfolio />
        <Contact />
        {/* <HashRouter basename="/">
          <Routes>

          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/technologies" component={Technologies} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/mobile-menu" component={MobileMenu} />
          <Route exact path="/garage" component={TheGarage} />
          </Routes>
        </HashRouter> */}
        <footer id="copyright">© {year} James Calingo</footer>
      </div>
    </div>
  );
}

export default App;
