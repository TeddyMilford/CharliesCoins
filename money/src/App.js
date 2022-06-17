import React from "react";
import { Route, Switch } from "react-router-dom";
import CoinsPage from "./CoinsPage";
import CommoditiesPage from "./CommoditiesPage";
import NavBar from "./NavBar";
import StocksPage from "./StocksPage";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/stocks">
          <StocksPage />
        </Route>
        <Route path="/cryptocurrency">
          <CoinsPage />
        </Route>
        <Route path="/commodities">
          <CommoditiesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
