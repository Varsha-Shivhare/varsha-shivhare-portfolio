import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Experience from './Components/Experience';
import Contact from "./Components/Contact";
import SocialMediaLinks from './Components/SocialMediaLinks';


function App() {
  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        <SocialMediaLinks />
    </div>
  );
}

export default App;
