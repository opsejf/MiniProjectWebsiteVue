import React from 'react';
import locations from "../utils/locations-data.json"

function LocationOver() {
    return (
            <ul className='locations-list' name='locations'>
                {locations.map((location, index) => {
                    return (
                        <li className='option' key={index}>{location.location}</li>
                    )
                })}
            </ul>
    )
}

export default LocationOver