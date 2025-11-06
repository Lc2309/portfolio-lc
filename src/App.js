import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import Formation from "./components/Formation";
import Experience from "./components/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Profile />
        <Formation />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;