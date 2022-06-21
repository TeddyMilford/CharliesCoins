//individual cards for the articles we're displaying on the learn page. This is static right now but should be rendered dynamically from a json file
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Articles() {
  return (
    <Row xs={1} md={2} className="g-4">
      <Col>
        <Card>
          <Card.Img
            variant="top"
            src="https://images.ctfassets.net/q5ulk4bp65r7/6l81zv96xpcPweCUKJi00N/1f7575ca211fd6587d825aa59bd101f0/ATB-3__4_.png?w=768&fm=png"
          />
          <Card.Body>
            <Card.Title href="https://www.coinbase.com/learn/market-updates/around-the-block-issue-29">
              The crypto market downturn explained
            </Card.Title>
            <Card.Text>
              In this edition of Around The Block, we take a look at the overall
              macro downturn with an eye towards the crypto markets.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Articles;
