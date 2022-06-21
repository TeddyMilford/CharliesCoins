//individual cards for the articles we're displaying on the learn page. This is static right now but should be rendered dynamically from a json file
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Articles({ article }) {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={article.imageUrl} />
        <Card.Body>
          <Card.Title>
            <Card.Link href={article.articleUrl} target="_blank">
              {article.title}
            </Card.Link>
          </Card.Title>
          <Card.Text>{article.intro}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Articles;
