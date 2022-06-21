//Cards used for the watchlist

import Card from "react-bootstrap/Card";

function TickerCards({ coin, index }) {
  if (coin !== undefined) {
    console.log(coin.changePercent24Hr);
    let color;
    let split = coin.changePercent24Hr.split("");

    let deter = split.includes("-") ? (color = false) : (color = true);

    return (
      <Card bg={color ? "success" : "danger"}>
        <Card.Header>{coin.symbol}</Card.Header>
        <Card.Body>
          <Card.Title>{coin.name} </Card.Title>
          <Card.Text>{coin.priceUsd}</Card.Text>
        </Card.Body>
      </Card>
    );
  } else {
    return null;
  }
}

export default TickerCards;

// bg={color ? "danger" : "success"}
