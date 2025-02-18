import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./views/About/About";
import Education from "./views/Education/Education";
import Home from "./views/Home/Home";
import Projects from "./views/Projects/Projects";
import Skills from "./views/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Education />
      <Skills />
    </>
  );
}

export default App;
