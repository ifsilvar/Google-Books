import React from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import Search from "./pages/Search"
import Jumbotron from "./components/Jumbotron"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <Router>
    <div>
      <Nav />
        <Jumbotron><h1>React Google Books</h1></Jumbotron>
        <Route exact path={["/", "/books"]}>
          <Books />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>

    </div>
  </Router>
  );
}

export default App;
