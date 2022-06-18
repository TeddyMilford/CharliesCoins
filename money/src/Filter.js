//Filter all displayed options by sector
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function Filter() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Sort by...">
      {/* //We will want to make sure we're rendering the sectors dynamically so that we can share this component across the different categories */}
      <Dropdown.Item href="#/action-1">Sector 1</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Sector 2</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Sector 3 </Dropdown.Item>
    </DropdownButton>
  );
}

export default Filter;
