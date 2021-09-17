import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Loading from "./components/loading";

function App() {
  return (
    <Router>
      <div>

        <Switch>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
