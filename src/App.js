import "./App.css";
import Footer from "./Components/Common/Footer/Footer";
import Header from "./Components/Common/Header/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pricing from "./Components/Pricing/Pricing";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Pricing" component={Pricing} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
