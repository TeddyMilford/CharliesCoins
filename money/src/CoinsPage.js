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
  const [sortBy, setSortBy] = useState("marketCap");

  const filteredCoins = coinData.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const sortedCoins = filteredCoins.sort((coin1, coin2) => {
    if (sortBy === "marketCap") {
      console.log("default sort is by market cap");
    } else if (sortBy === "highestPrice") {
      return coin2.priceUsd - coin1.priceUsd;
    } else {
      return coin1.priceUsd - coin2.priceUsd;
    }
  });

  return (
    <Container>
      <Row>
        <h1>Discover new coins!</h1>
      </Row>
      <Row xs="auto">
        <SearchBar
          searchTerm={searchTerm}
          onChangeSearch={setSearchTerm}
          sortBy={sortBy}
          onChangeSortBy={setSortBy}
        />
      </Row>
      <Row>
        <Col md={9}>
          <CardContainer
            coinData={sortedCoins}
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
