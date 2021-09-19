import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Title from "./components/Title";

//pages
import Home from "./pages/Home";
import Detail from "./pages/Detail";


function App() {
  return (
    <Router>
      <div className="container">
      <Title/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/char/:char_id" component={Detail}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
