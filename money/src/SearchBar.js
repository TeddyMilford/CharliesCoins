// Search by ticker symbol. Use Bootstrap Form Control https://react-bootstrap.github.io/forms/form-control/
import Form from "react-bootstrap/Form";

function SearchBar() {
  return (
    <Form>
      <Form.Control type="search" placeholder="Enter ticker symbol" />
    </Form>
  );
}

export default SearchBar;
