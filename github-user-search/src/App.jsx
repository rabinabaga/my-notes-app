import { useState } from "react";
import "./App.css";
import Card from "./Card";

const API_URL = "https://api.github.com";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const query = event.target.searchquery.value;
    const results = await fetch(`${API_URL}/search/users?q=${query}`);
    const resultsJson = await results.json();
    setSearchResults(resultsJson["items"]);
    event.target.reset();
  };

  const useDebounce = (func, delay) => {
    let timeout = null;
    return (...args) => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
  const handleChange = async (event) => {
    const valueInput = event.target.value;
    if (valueInput == "") {
      setSearchResults(null);
      return;
    }

    const results = await fetch(`${API_URL}/search/users?q=${valueInput}`);
    const resultsJson = await results.json();
    setSearchResults(resultsJson["items"]);
  };
  const handleChangeDebounced = useDebounce(handleChange, 400);

  return (
    <div className="app">
      <p className="heading">Project 5: GitHub User Search</p>
      <section className="main">
        <section className="search-row">
          <input
            className="input-field"
            type="text"
            placeholder="Enter username or email"
            onChange={(event) => handleChangeDebounced(event)}
            name="searchquery"
          />
          <button className="search-button">Search</button>
        </section>
        <section className="search-results">
          <p className=" heading secondary-heading">Results</p>
          {searchResults?.map((result) => {
            return <Card key={result["id"]} result={result} />;
          })}
        </section>
      </section>
    </div>
  );
}

export default App;
