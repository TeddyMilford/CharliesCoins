// Sort dropdown for users to select what they want to sort the dispalyed stocks by (ie. price (low/high), % gain in day, etc)
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function Sort() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Sort by...">
      <Dropdown.Item href="#/action-1">Price (lowest)</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Price (highest)</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Daily gain % </Dropdown.Item>
    </DropdownButton>
  );
}

export default Sort;
