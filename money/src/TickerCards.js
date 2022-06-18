//Cards used for the watchlist

import Card from "react-bootstrap/Card";

function TickerCards() {
  return (
    <Card>
      <Card.Header>$ TICKER</Card.Header>
      <Card.Body>
        <Card.Title> Company Name </Card.Title>
        <Card.Text>Price Details</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TickerCards;
