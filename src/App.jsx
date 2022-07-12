import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";
import Portfolio from "./components/topbar/Portfolio";
import Work from "./components/topbar/Work";
import Contact from "./components/topbar/Contact";
import Intro from "./components/topbar/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Work />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
