import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDisplayCountry } from "../redux/slices/displayCountrySlice";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";

const OptionDisplay = () => {

    const dispatch = useDispatch()

    let currentPotentials = useSelector(selectPotentials)
    console.log(`options display`)
    console.log(currentPotentials)

    return <div className="stack">
        {currentPotentials.map((country, index) => {
        return (
            <h2 key={country.name.official} className='country-option' onClick={() => dispatch(setDisplayCountry(currentPotentials[index]))}>
            {country.name.common}</h2>
        )
    })
    }</div>;
};

export default OptionDisplay;
