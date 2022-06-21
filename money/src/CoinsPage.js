//This is where we should load in the page title, Filter, Search, and Sort components for Stocks

import CardContainer from "./CardContainer";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import Sort from "./Sort";
import Watchlist from "./Watchlist";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CoinsPage({coinData}) {
  return (
    (
      <Container>
        <Row>
          <h1>Discover new coins!</h1>
        </Row>
        <Row xs="auto">
          <Col>
            <SearchBar />
          </Col>
          <Col>
            <Sort />
          </Col>
          <Col>
            <Filter />
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <CardContainer coinData={coinData} />
          </Col>

          <Col md={4}>
            <Watchlist />
          </Col>
        </Row>
      </Container>
    )
  );
}

export default CoinsPage;
