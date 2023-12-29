import "./App.css";

import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { AboutMe } from "./components/AboutMe";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
    </>
  );
}

export default App;
