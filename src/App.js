import React from "react";
import About from "./components/about/About";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import Product from "./components/Product/Product";

export default function App() {
  return (
    <div>
      <Intro />
      <About />
      <Product />
      <Contact />
    </div>
  );
}
