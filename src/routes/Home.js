import React from "react";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Hero from "../components/Hero";

import heroData from "../assets/data/HeroData";

export default function Home(props) {
  return (
    <div>
      <React.Fragment>
        <Hero heroData={heroData} />
        <Skills />
        <Projects />
      </React.Fragment>
    </div>
  );
}
