// Search by ticker symbol. Use Bootstrap Form Control https://react-bootstrap.github.io/forms/form-control/
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

function SearchBar({ searchTerm, onChangeSearch }) {
  function handleChange(event) {
    onChangeSearch(event.target.value);
  }

  return (
    <Form>
      <FormControl
        type="text"
        id="search"
        placeholder="search name or symbol"
        defaultValue={searchTerm}
        onChange={handleChange}
      />
    </Form>
  );
}

export default SearchBar;
