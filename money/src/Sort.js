// Sort dropdown for users to select what they want to sort the dispalyed stocks by (ie. price (low/high), % gain in day, etc)
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Col } from "react-bootstrap";

function Sort() {
  return (
    <Col>
      <DropdownButton id="dropdown-basic-button" title="Sort by...">
        <Dropdown.Item href="#/action-1">Market Cap (highest)</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Price (highest)</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Price (lowest)</Dropdown.Item>
      </DropdownButton>
    </Col>
  );
}

export default Sort;
