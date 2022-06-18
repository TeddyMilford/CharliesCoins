import TickerCards from "./TickerCards";

//This is where we can build the list for the stocks/coins/commodities being watched
function Watchlist() {
  return (
    <div>
      <h1>Watchlist</h1>
      <TickerCards />
    </div>
  );
}

export default Watchlist;
