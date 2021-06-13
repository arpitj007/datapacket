import "./App.css";
import Footer from "./Components/Common/Footer/Footer";
import Header from "./Components/Common/Header/Header";
import Body from "./Components/Home/Body/Body";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
