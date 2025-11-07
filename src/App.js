import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import Formation from "./components/Formation";
import Experience from "./components/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Navbar />
          <div className="main-container">
            <section id="profile"><Profile /></section>
            <section id="formation"><Formation /></section>
            <section id="experience"><Experience /></section>
            <section id="projects"><Projects /></section>
            <section id="contact"><Contact /></section>
          </div>
        </div>
    </LanguageProvider>
  );
}

export default App;