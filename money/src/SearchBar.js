// Search by ticker symbol. Use Bootstrap Form Control https://react-bootstrap.github.io/forms/form-control/
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Sort from "./Sort";
import Search from "./Search";

function SearchBar({ searchTerm, onChangeSearch, sortBy, onChangeSortBy }) {
  return (
    <Form>
      <Row className="mb-1 mt-1">
        <Search searchTerm={searchTerm} onChangeSearch={onChangeSearch} />
        <Sort sortBy={sortBy} onChangeSortBy={onChangeSortBy} />
      </Row>
    </Form>
  );
}

export default SearchBar;
