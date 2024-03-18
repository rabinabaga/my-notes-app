import { useState } from "react";
import "./App.css";
import Card from "./Card";

const API_URL = "https://api.github.com";



function App() {

  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = async(event)=>{
    event.preventDefault();
    const query = event.target.searchquery.value;
    const results = await fetch(`${API_URL}/search/users?q=${query}`);
   const resultsJson = await results.json();
    setSearchResults(resultsJson["items"]);
    event.target.reset();
  }


  return (
    <div className="app">
      <p className="heading">Project 5: GitHub User Search</p>
      <section className="main">
      <section className="search-row">
       <form onSubmit={handleSubmit}>
       <input
          className="input-field"
          type="text"
          placeholder="Enter username or email"
          name="searchquery"
        />
        <button type="submit" className="search-button">Search</button>
       </form>
      </section>
      <section className="search-results">
      <p className=" heading secondary-heading">
      Results
      </p>
        {searchResults?.map((result)=>{
          return <Card result={result}/>
        })}
      </section>
      </section>
    </div>
  );
}

export default App;
