// Sort dropdown for users to select what they want to sort the dispalyed stocks by (ie. price (low/high), % gain in day, etc)
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Col } from "react-bootstrap";

function Sort({ sortBy, onChangeSortBy }) {
  const handleSelect = (e) => {
    e.preventDefault();
    if (e.target.name !== "") {
      onChangeSortBy(e.target.name);
    }
  };

  return (
    <Col>
      <DropdownButton
        id="dropdown-basic-button"
        title={sortBy}
        onClick={handleSelect}
      >
        <Dropdown.Item name="marketCap">Market Cap (highest)</Dropdown.Item>
        <Dropdown.Item name="highestPrice">Price (highest)</Dropdown.Item>
        <Dropdown.Item name="lowestPrice">Price (lowest)</Dropdown.Item>
      </DropdownButton>
    </Col>
  );
}

export default Sort;
