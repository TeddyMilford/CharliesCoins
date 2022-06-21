//clone of https://www.coinbase.com/learn/market-updates
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Articles from "./Articles";

function LearnPage() {
  return (
    <Container>
      <Row>
        <Col className="justify-content-center">
          <h1>Market updates</h1>
          <p>Understand the news and events behind the latest market moves</p>
        </Col>
      </Row>
      <Articles></Articles>
    </Container>
  );
}

export default LearnPage;
