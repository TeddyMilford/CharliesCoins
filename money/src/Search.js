import FormControl from "react-bootstrap/FormControl";
import Col from "react-bootstrap/Col";

function Search({ searchTerm, onChangeSearch }) {
  function handleChange(event) {
    onChangeSearch(event.target.value);
  }
  return (
    <Col xs="auto">
      <FormControl
        type="text"
        id="search"
        placeholder="search name or symbol"
        defaultValue={searchTerm}
        onChange={handleChange}
      />
    </Col>
  );
}

export default Search;
