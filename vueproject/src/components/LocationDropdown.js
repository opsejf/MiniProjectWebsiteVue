import React from 'react'
import "../stylesheets/locationDropdown.css"
import locations from "../utils/locations-data.json"

function LocationDropdown() {
  return (
    <section className='ld-container'>
      <h3>SEE WHAT'S ON AT</h3>
      <form className='ld-form'>
        <select className='ld-dropdown' name='locations'>
          <option>{locations.map(location => {
            return location.location
          })}</option>
        </select>
        <button id='gobtn'>GO</button>
      </form>
    </section>
  )
}

export default LocationDropdown