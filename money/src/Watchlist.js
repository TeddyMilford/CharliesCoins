import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import TickerCards from "./TickerCards";

//This is where we can build the list for the coins being watched. It will be a page of its own that we're able to access from the main nav
function Watchlist({ watchData, onAdd }) {
  let deck = watchData.map((c) => {
    return (
      <Row>
        <TickerCards key={c.id} coin={c} onAdd={onAdd} watchData={watchData} />
      </Row>
    );
  });
  return (
    <Container>
      <h1>Watchlist</h1>
      {deck}
    </Container>
  );
}

export default Watchlist;
