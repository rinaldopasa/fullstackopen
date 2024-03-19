import { useState } from "react";

const CountryDetails = ({ country }) => {
  return (
    <>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <h2>Languages</h2>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img
        src={country.flags.svg}
        alt={`${country.name.common} flag`}
        width="200"
      />
    </>
  );
};

const Country = ({ country }) => {
  const [isShow, setIsShow] = useState(false);

  const handleShowCountry = (event) => {
    event.preventDefault();
    setIsShow(!isShow);
  };

  const countryName = country.name.common;
  return (
    <li>
      {countryName}{" "}
      <button onClick={handleShowCountry}>{isShow ? "hide" : "show"}</button>
      {isShow && <CountryDetails country={country} />}
    </li>
  );
};

const CountryList = ({ countries }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (countries.length === 1) {
    return <CountryDetails country={countries[0]} />;
  } else {
    return (
      <menu>
        {countries.map((country) => (
          <Country key={country.cca3} country={country} />
        ))}
      </menu>
    );
  }
};

export default CountryList;
