import { useEffect, useState } from "react";
import countryServices from "./services/countries";
import CountryList from "./components/CountryList";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("fetching countries...");
    countryServices.getAll().then((returnedData) => setCountries(returnedData));
  }, []);

  let filteredCountries = [];
  if (search !== "") {
    filteredCountries = countries.filter((country) => {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    });
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        find countries{" "}
        <input id="findCountries" type="search" onChange={handleSearchChange} />
      </label>
      <output htmlFor="findCountries">
        <CountryList countries={filteredCountries} />
      </output>
    </form>
  );
};

export default App;
