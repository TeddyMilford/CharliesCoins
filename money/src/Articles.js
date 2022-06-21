//individual cards for the articles we're displaying on the learn page. This is static right now but should be rendered dynamically from a json file
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Articles({ article }) {
  return (
    <Row xs={4} md={2} className="g-4">
      <Col>
        <Card>
          <Card.Img variant="top" src={article.imageUrl} />
          <Card.Body>
            <Card.Title href={article.articleUrl}>{article.title}</Card.Title>
            <Card.Text>{article.intro}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Articles;
