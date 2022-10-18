import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Overview = () => {
  const currentDisplay = useSelector(selectDisplay);

  return (
    <div className="stack">
      <h1>{currentDisplay.name.official}</h1>
      <h3>{currentDisplay.name.common}</h3>

      <table className="overview-table">
        <tr>
          <td>Borders</td>
          <td>
            {currentDisplay.borders
              ? currentDisplay.borders.map((country, index, arr) => {
                  if (index + 1 === arr.length) {
                    return `${country}, `;
                  } else {
                    return `${country}, `;
                  }
                })
              : "N/A"}
          </td>
        </tr>
        <tr>
          <td>Capitol: </td>
          <td>{currentDisplay.capital} </td>
        </tr>
        <tr>
          <td>population: </td>
          <td>{currentDisplay.population} </td>
        </tr>
        <tr>
          <td>Contitnents: </td>
          <td>
            {currentDisplay.continents.map((continent, index) => {
              return <td>{continent}</td>;
            })}{" "}
          </td>
        </tr>
        <tr>
          <td>Languages: </td>
          <td>
            {Object.values(currentDisplay.languages).map((language, index) => {
              return <td>{language}</td>;
            })}{" "}
          </td>
        </tr>
        <tr>
          <td> UN Member: {currentDisplay.unMember ? "Yes" : "No"}</td>
        </tr>
        <tr>
          <td> Independent: {currentDisplay.independent ? "Yes" : "No"}</td>
        </tr>
      </table>
    </div>
  );
};

export default Overview;
