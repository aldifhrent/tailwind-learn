import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";

const AgenonPage = () => {
  return (
    <div>
      <div className="bg-nav-hero h-fit bg-no-repeat bg-cover overflow-hidden">
        <Header />
        <Hero />
      </div>
      <Services/>
    </div>
  );
};

export default AgenonPage;
