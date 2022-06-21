//Contains each of the individual stock cards (for each stock that we get from the API). We should maybe use the tab container components from Bootstrap and use that to display the card with details in a second column https://react-bootstrap.github.io/components/tabs/

import Container from "react-bootstrap/Container";
import TickerCards from "./TickerCards";
import Row from "react-bootstrap/Row";

function CardContainer({ coinData }) {
  console.log(coinData);
  const deck = coinData.map((c, i) => {
    return <TickerCards key={c.id} coin={c} index={i} />;
  });

  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        {deck}
      </Row>
    </Container>
  );
}

export default CardContainer;
