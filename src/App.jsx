import React from "react";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

function App() {
  return (
    <>
      <SpeedInsights />
      <Navbar />
      <Hero />
      <Project />
      <Skill />
      <Footer />
    </>
  );
}

export default App;
