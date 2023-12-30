import "./App.css";

import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { AboutMe } from "./components/AboutMe";
import { Experience } from "./components/Experience";
import { Project } from "./components/Project";
import { Contact } from "./components/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <Experience />
      <Project />
      <Contact />
    </>
  );
}

export default App;
