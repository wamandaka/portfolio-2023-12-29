import React from "react";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Project />
      <Skill />
      <Footer />
    </>
  );
}

export default App;
