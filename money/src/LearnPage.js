//clone of https://www.coinbase.com/learn/market-updates
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Articles from "./Articles";
import { useEffect, useState } from "react";

function LearnPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/articles")
      .then((r) => r.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <Container>
      <Row>
        <Col className="justify-content-center">
          <h1>Market updates</h1>
          <p>Understand the news and events behind the latest market moves</p>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4">
        {articles.map((article) => (
          <Articles key={article.id} article={article} />
        ))}
      </Row>
    </Container>
  );
}

export default LearnPage;
