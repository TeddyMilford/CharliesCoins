import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import TickerCards from "./TickerCards";

//This is where we can build the list for the coins being watched. It will be a page of its own that we're able to access from the main nav
function Watchlist({ watchData, onAdd }) {
  let deck = watchData.map((c) => {
    return (
      <TickerCards key={c.id} coin={c} onAdd={onAdd} watchData={watchData} />
    );
  });
  return (
    <Container>
      <h1>Watchlist</h1>
      <Row xs={1} md={2} className="g-4">
        {deck}
      </Row>
    </Container>
  );
}

export default Watchlist;
