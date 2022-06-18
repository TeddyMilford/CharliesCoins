//This is where we should load in the page title, Filter, Search, and Sort components for Stocks

import CardContainer from "./CardContainer";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import Sort from "./Sort";
import Watchlist from "./Watchlist";

function StocksPage() {
  return (
    console.log("this is the Stocks main page"),
    (
      <div>
        <h1>NYSE Stock Exchange</h1>
        <div>
          <SearchBar />
          <Sort />
          <Filter />
        </div>
        <div>
          <CardContainer />
        </div>
        <div>
          <Watchlist />
        </div>
      </div>
    )
  );
}

export default StocksPage;
