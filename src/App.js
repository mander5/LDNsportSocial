import "./App.scss";

import Gallery from "./components/Gallery";
import Message from "./components/Message";
// import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <NavbarMobile />
      <Message />
      <Gallery />
    </div>
  );
}

export default App;
