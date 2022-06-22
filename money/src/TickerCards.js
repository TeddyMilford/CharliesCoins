//Cards used for the watchlist
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { BsPlusCircleFill, BsPlusCircle } from "react-icons/bs";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Button } from "react-bootstrap";

function TickerCards({ coin, index }) {
  const [tog, setTog] = useState(false);
  if (coin !== undefined) {
    function handleClick() {
      setTog(!tog);
    }
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

            <Button
              variant="light"
              onClick={() => {
                handleClick();
              }}
            >
              {tog ? <BsPlusCircleFill /> : <BsPlusCircle />}
            </Button>
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
