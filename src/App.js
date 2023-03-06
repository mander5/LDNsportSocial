import "./App.scss";

import Gallery from "./components/Gallery";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <NavbarMobile />
      <Landing />
      <Gallery />
    </div>
  );
}

export default App;
