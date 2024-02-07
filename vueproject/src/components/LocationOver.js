import React from 'react';
import locations from "../utils/locations-data.json"

function LocationOver() {
    return (
        <div className='locations-container'>
            <select className='ld-dropdown' name='locations'>
                {locations.map((location, index) => {
                    return (
                        <option className='option' key={index}>{location.location}</option>
                    )
                })}
            </select>
        </div>

    )
}

export default LocationOver