import Hero from "./components/Hero";
import Project from "./components/Project";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { inject } from "@vercel/analytics";
function App() {
  inject();
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
