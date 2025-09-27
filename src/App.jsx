import React, { useEffect } from "react";
import {
  Compliance,
  Contact,
  DownloadAndPricePage,
  Featurs,
  Footer,
  Header,
  Header1,
  Integrations,
  Main,
  Slides,
  SmartDashboart,
} from "./components/index";

function App() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header1 />
      <Featurs />
      <Compliance />
      <SmartDashboart />
      <Integrations />
      <Slides />
      <DownloadAndPricePage />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
