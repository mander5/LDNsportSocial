import "./App.scss";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Landing from "./components/landing";

function App() {
  return (
    <div className="App">
      <Landing></Landing>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
