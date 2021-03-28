import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Saved from "./pages/Saved";
import SearchBooks from "./pages/Search";
import Jumbotron from "./components/Jumbotron"



function App() {
  return (
    <Router>
      <div>

        <Navbar />
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/search" component={SearchBooks} />
          <Route exact path="/saved" component={Saved} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
