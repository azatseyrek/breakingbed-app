import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Title from "./components/Title";

//pages
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Quotes from "./pages/Quotes";


function App() {
  return (
    <Router>
      <div className="container">
        <div className="navbar">
        <ul>
          <li>
            <Link to="/">
              CHARACTERS
            </Link>
          </li>
          <li>
            <Link to="/quotes">
              QUOTES
            </Link>
          </li>

          </ul>
        </div>

        <Title />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/char/:char_id" component={Detail}></Route>
          <Route path="/quotes" component={Quotes}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
