import { useState, useEffect } from "react";
import Input from "./Input"; // فرض بر این است که Input در همین پوشه قرار دارد
import "./Index.css";
const App = () => {
  const [cities, setCities] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // دریافت لیست شهرها از فایل cities.json
    fetch("../public/cities.JSON")
      .then((response) => response.json())
      .then((data) => setCities(data))
      .catch((error) => console.error("خطا در دریافت شهرها:", error));
  }, []);

  const handleInputChange = (e) => {
    const input = e.target.value;
    setSearchInput(input);

    // فیلتر کردن شهرها بر اساس ورودی و حساسیت به بزرگی و کوچکی حروف
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
      <h1>جستجوی شهر</h1>
      <Input handleChange={handleInputChange} hint="جستجوی شهر" />
      {searchInput && (
        <ul className="suggestions">
          {suggestions.map((city, index) => (
            <li key={index}>{city}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
