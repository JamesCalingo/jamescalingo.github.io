import Landing from "./pages/Landing";
import About from "./pages/About";
import Technologies from "./pages/Technologies/Technologies";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import DateObject from "react-date-object";
import Logobar from "./components/logobar/Logobar"

function App() {
  const date = new DateObject()
  const year = date.format("YYYY")
  return (
    <div className="container-grid">
      <Topbar />

      <div className="pages">
        <Landing />
        <About />
        <Technologies />
        <Portfolio />
        <Contact />
        <footer >
          <p id="copyright">
          © {year} James Calingo
          </p>
          </footer>
          {/* <Logobar /> */}
      </div>
    </div>
  );
}

export default App;
