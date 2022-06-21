import TickerCards from "./TickerCards";

//This is where we can build the list for the coins being watched. It will be a page of its own that we're able to access from the main nav
function Watchlist() {
  return (
    <div>
      <h1>Watchlist</h1>
      <TickerCards />
    </div>
  );
}

export default Watchlist;
