import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, area, population, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3>Name:{name?.common}</h3>
            <img width= "300px" height= "200px" src={flags.png} alt="" />
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={() =>handleVisitedFlags(country.flags.png)}>Add Visited Flag</button>
            <br />
            <button style={{background: visited ? 'white' : 'blue', color: visited ? 'black' : 'white'}} onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {
                visited && 'I have visited this country.'
            }
        </div>
    );
};

export default Country;