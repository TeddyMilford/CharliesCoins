//Cards used for the watchlist

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function TickerCards({ coin, index }) {
  if (coin !== undefined) {
    let color;
    let split = coin.changePercent24Hr.split("");

    let newNumber = Number(coin.changePercent24Hr);
    let fixedDecimal = newNumber.toFixed(3);
    console.log(fixedDecimal);

    let newPrice = Number(coin.priceUsd);
    let priceDecimal = newPrice.toFixed(2);

    let deter = split.includes("-") ? (color = false) : (color = true);

    return (
      <Col>
        <Card
          style={color ? { background: "#28FF28" } : { background: "#FF2828" }}
        >
          <Card.Header>{coin.symbol}</Card.Header>
          <Card.Body>
            <Card.Title>{coin.name} </Card.Title>
            <Card.Text>${priceDecimal}</Card.Text>
            <Card.Text>Moved {fixedDecimal}% over 24 hours</Card.Text>
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
