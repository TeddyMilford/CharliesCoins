//Cards used for the watchlist

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function TickerCards({ coin, index }) {
  if (coin !== undefined) {
    let color;
    let split = coin.changePercent24Hr.split("");

    let deter = split.includes("-") ? (color = false) : (color = true);

    return (
      <Col>
        <Card
          style={color ? { background: "#28FF28" } : { background: "#FF2828" }}
        >
          <Card.Header>{coin.symbol}</Card.Header>
          <Card.Body>
            <Card.Title>{coin.name} </Card.Title>
            <Card.Text>{coin.priceUsd}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  } else {
    return null;
  }
}

export default TickerCards;

// bg={color ? "danger" : "success"}
