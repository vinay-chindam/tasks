import React, { useState } from "react";

function NestedDropdown() {

  const data = [
    { country: "India", cities: ["Hyderabad", "Delhi", "Mumbai"] },
    { country: "USA", cities: ["New York", "Chicago", "Los Angeles"] },
    { country: "Australia", cities: ["Sydney", "Melbourne"] }
  ];

  const [selectedCountry, setselectedCountry] = useState("");
  const [selectedCity, setselectedCity] = useState("");

  const selectedCountryData = data.find(
    (item) => item.country === selectedCountry
  );

  return (
    <div>

      <select
        value={selectedCountry}
        onChange={(e) => {
          setselectedCountry(e.target.value);
          setselectedCity("");
        }}
      >
        <option value="">Select Country</option>

        {data.map((item) => {
          return (
            <option key={item.country} value={item.country}>
              {item.country}
            </option>
          );
        })}
      </select>


      <select
        value={selectedCity}
        onChange={(e) => setselectedCity(e.target.value)}
        disabled={!selectedCountry}
      >
        <option value="">Select City</option>

        {selectedCountryData?.cities.map((city) => {
          return (
            <option key={city} value={city}>
              {city}
            </option>
          );
        })}
      </select>

    </div>
  );
}

export default NestedDropdown;