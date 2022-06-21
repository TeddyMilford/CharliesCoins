import React from "react";
import { Route, Switch } from "react-router-dom";
import CoinsPage from "./CoinsPage";
import LearnPage from "./LearnPage";
import NavBar from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Watchlist from "./Watchlist";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/discover">
          <CoinsPage></CoinsPage>
        </Route>
        <Route path="/watchlist">
          <Watchlist></Watchlist>
        </Route>
        <Route path="/learn">
          <LearnPage></LearnPage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
