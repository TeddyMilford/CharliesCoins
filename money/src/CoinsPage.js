//This is where we should load in the page title, Filter, Search, and Sort components for Stocks

import CardContainer from "./CardContainer";
import SearchBar from "./SearchBar";
import Watchlist from "./Watchlist";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";

function CoinsPage({ coinData, watchData, onAdd }) {
  const [searchTerm, setSearchTerm] = useState("");

  const coinsToDisplay = coinData.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <Container>
      <Row>
        <h1>Discover new coins!</h1>
      </Row>
      <Row xs="auto">
        <SearchBar searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
      </Row>
      <Row>
        <Col md={9}>
          <CardContainer
            coinData={coinsToDisplay}
            onAdd={onAdd}
            watchData={watchData}
          />
        </Col>
        <Col md={3}>
          <Watchlist watchData={watchData} onAdd={onAdd} />
        </Col>
      </Row>
    </Container>
  );
}

export default CoinsPage;
