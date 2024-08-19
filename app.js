import React from "react";
import ReactDOM from "react-dom/client";
import VittaFlow3 from "./src/sections/VittaFlow3";
import VittaFlow4 from "./src/sections/VittaFlow4";
import VittaFlow5 from "./src/sections/VittaFlow5";
import VittaFlow6 from "./src/sections/VittaFlow6";
import VittaFlowAbout from "./src/sections/VittaFlowAbout/VittaFlowAbout";
import HeroSection from "./src/sections/Hero/HeroSection";
import VittaFlowGrow from "./src/sections/VittaFlowGrow/VittaGrow";
import { Footer } from "./src/sections/Footer/Footer";

const AppLayout = () => {
  return (
    <div className="app">
      <HeroSection />
      <VittaFlow6 />
      <VittaFlowGrow />
      <VittaFlow4 />
      <VittaFlow3 />
      
      <VittaFlowAbout />
      <VittaFlow5 />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
