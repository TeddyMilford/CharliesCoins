//Contains each of the individual stock cards (for each stock that we get from the API). We should maybe use the tab container components from Bootstrap and use that to display the card with details in a second column https://react-bootstrap.github.io/components/tabs/

import Container from "react-bootstrap/Container";
import TickerCards from "./TickerCards";

function CardContainer({ coinData }) {
  const deck = coinData.map((c, i) => {
    return <TickerCards key={c.id} coin={c} index={i} />;
  });

  return <Container>{deck}</Container>;
}

export default CardContainer;
