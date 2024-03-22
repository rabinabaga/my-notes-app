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

  // const useDebounce = (func, delay) => {
  //   let timeout = null;
  //   return (...args) => {
  //     if (timeout) clearTimeout(timeout);
  //     timeout = setTimeout(() => {
  //       func(...args);
  //     }, delay);
  //   };
  // };
  const handleChange = async (event) => {
    const valueInput = event.target.value;
    console.log("value input",valueInput);
    if (valueInput == "") {
      setSearchResults(null);
      return;
    }

    const results = await fetch(`${API_URL}/search/users?q=${valueInput}`);
    const resultsJson = await results.json();
    console.log(resultsJson);
    setSearchResults(resultsJson["items"]);
  };
  // const handleChangeDebounced = useDebounce(handleChange, 400);

  function outer(func){
    let timeout = null;
    return (event)=>{

      if(timeout){
      clearTimeout(timeout);
    }
    timeout =  setTimeout(()=>{
      console.log("func",func);
      func(event);}, 1000);
  }
    }
  
const innerAccess = outer(handleChange);//inner function with access to outer function and variables persistence across function calls
  return (
    <div className="app">
      <p className="heading">GitHub User Search</p>
      <section className="main">
        <section className="search-row">
          <input
            className="input-field"
            type="text"
            placeholder="Enter username or email"
            onChange={(event) => innerAccess(event)}
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
