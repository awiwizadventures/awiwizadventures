/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Navbar from "./components/splash/Navbar";
import Hero from "./components/splash/Hero";
import About from "./components/splash/About";

function Splash() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
}

export default Splash;
