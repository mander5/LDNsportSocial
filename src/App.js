import "./App.scss";
import React, { useState, useEffect } from "react";

import Gallery from "./components/Gallery";
import Message from "./components/Message";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="App">
      {isMobile ? <NavbarMobile /> : <Navbar />}
      <Message />
      <Gallery />
    </div>
  );
}

export default App;
