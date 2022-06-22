//Cards used for the watchlist
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Button } from "react-bootstrap";
import Watchlist from "./Watchlist";

function TickerCards({ coin, index, onAdd, watchData }) {
  if (coin !== undefined) {
    let tog = watchData.includes(coin);

    let color;
    let split = coin.changePercent24Hr.split("");

    let newNumber = Number(coin.changePercent24Hr);
    let fixedDecimal = newNumber.toFixed(3);

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
              onClick={(e) => {
                onAdd(coin, e);
              }}
            >
              {tog ? "Remove" : "Add"}
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
