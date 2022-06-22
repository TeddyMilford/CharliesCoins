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
    fetch("http://localhost:3001/watchlist")
      .then((response) => response.json())
      .then((data) => setWatchlist(data));
  }, []);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <CoinsPage coinData={coins} watchData={watchlist}></CoinsPage>
        </Route>
        <Route path="/discover">
          <CoinsPage coinData={coins} watchData={watchlist}></CoinsPage>
        </Route>
        <Route path="/watchlist">
          <Watchlist watchData={watchlist}></Watchlist>
        </Route>
        <Route path="/learn">
          <LearnPage></LearnPage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
