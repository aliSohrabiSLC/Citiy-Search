import { useState, useEffect } from "react";
import Input from "./Input"; 
import "./Index.css";
const App = () => {
  const [cities, setCities] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    
    fetch("/cities.JSON")
      .then((response) => response.json())
      .then((data) => setCities(data))
      .catch((error) => console.error("خطا در دریافت شهرها:", error));
  }, []);

  const handleInputChange = (e) => {
    const input = e.target.value.toLowerCase();
    setSearchInput(input);

    if (input) {
      const filteredCities = cities.filter((city) => 
        city.toLowerCase().startsWith(input)
      );
      setSuggestions(filteredCities);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="app">
      <h1>City Finder</h1>
      <Input handleChange={handleInputChange}  />
      {searchInput && (
        <ul >
          {suggestions.map((city, index) => (
            <li className="suggestions" key={index}>{city}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
