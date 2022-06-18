import React from "react";
import { Route, Switch } from "react-router-dom";
import CoinsPage from "./CoinsPage";
import CommoditiesPage from "./CommoditiesPage";
import NavBar from "./NavBar";
import StocksPage from "./StocksPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/stocks">
          <StocksPage></StocksPage>
        </Route>
        <Route path="/cryptocurrency">
          <CoinsPage></CoinsPage>
        </Route>
        <Route path="/commodities">
          <CommoditiesPage></CommoditiesPage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
