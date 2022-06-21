import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import CoinsPage from "./CoinsPage";
import LearnPage from "./LearnPage";
import NavBar from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Watchlist from "./Watchlist";

function App() {
  const [coins, setCoins] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
      .then((response) => response.json())
      .then((data) => {
        setCoins(data.data);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <CoinsPage coinData={coins}></CoinsPage>
        </Route>
        <Route path="/discover">
          <CoinsPage coinData={coins}></CoinsPage>
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
