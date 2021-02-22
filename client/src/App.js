import React from "react";
import Nav from "./components/Nav";
import Search from "./pages/Search"
import Saved from "./pages/Saved"
import Jumbotron from "./components/Jumbotron"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <Router>
    <div>
      <Nav />
        <Jumbotron><h1>React Google Books</h1></Jumbotron>
        <Route exact path={["/", "/search"]}>
          <Search />
        </Route>
        <Route exact path="/saved">
          <Saved />
        </Route>

    </div>
  </Router>
  );
}

export default App;
