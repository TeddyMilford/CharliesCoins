//Contains each of the individual stock cards (for each stock that we get from the API). We should maybe use the tab container components from Bootstrap and use that to display the card with details in a second column https://react-bootstrap.github.io/components/tabs/
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TickerDetails from "./TickerDetails";

function CardContainer() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">$BTC</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">$ETH</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <TickerDetails />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <TickerDetails />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default CardContainer;
