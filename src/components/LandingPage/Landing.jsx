import React from "react";

import Hero from "./Hero";
import About from "./About";
import Nav from "./Nav";

const Landing = () => {
  return (

    <div className="fullHeight">
      <Nav />
      <Hero />
      <About />
    </div>
  );
};

export default Landing;
