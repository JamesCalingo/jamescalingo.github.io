import React from "react";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Technologies from "./pages/Technologies/Technologies";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import Sidebar from "./components/sidebar/Sidebar";
// import MobileMenu from "./pages/MobileMenu";
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
        <footer id="copyright">© {year} James Calingo</footer>
      </div>
    </div>
  );
}

export default App;
