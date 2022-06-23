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

  function addToWatch(coin, e) {
    if (e.target.innerText === "Add") {
      fetch("https://tandn.herokuapp.com/watchlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(coin),
      });
      setWatchlist([...watchlist, coin]);
    }

    if (e.target.innerText === "Remove") {
      fetch("https://tandn.herokuapp.com/watchlist/" + coin.id, {
        method: "DELETE",
      });
      let updatedWatch = watchlist.filter((c) => {
        return c.id !== coin.id;
      });
      setWatchlist(updatedWatch);
    }
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <CoinsPage
            coinData={coins}
            watchData={watchlist}
            onAdd={addToWatch}
          ></CoinsPage>
        </Route>
        <Route path="/discover">
          <CoinsPage
            coinData={coins}
            watchData={watchlist}
            onAdd={addToWatch}
          ></CoinsPage>
        </Route>
        <Route path="/watchlist">
          <Watchlist watchData={watchlist} onAdd={addToWatch}></Watchlist>
        </Route>
        <Route path="/learn">
          <LearnPage></LearnPage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
