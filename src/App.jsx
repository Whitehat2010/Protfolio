import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
