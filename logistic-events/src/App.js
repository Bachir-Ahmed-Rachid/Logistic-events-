import About from "./componants/About";
import Contact from "./componants/Constact";
import Copyright from "./componants/Copyright";
import Nav from "./componants/Nav";
import Portfolio from "./componants/Portfolio";
import Services from "./componants/Services";
import Skills from "./componants/Skills";
import Slides from "./componants/Slides";
import Stats from "./componants/Stats";

function App() {
  return (
    <div className="App">
      <Slides/>
      <Nav/>
      <About/>
      <Services/>
      <Skills/>
      <Stats/>
      <Portfolio/>
      <Contact/>
      <Copyright/>
      
    </div>
  );
}

export default App;
