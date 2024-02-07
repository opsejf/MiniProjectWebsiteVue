import React, { useState } from 'react'
import "../stylesheets/locationDropdown.css"
import locations from "../utils/locations-data.json"
import LocationOver from './LocationOver'


function LocationDropdown() {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(true)
  }
  

  return (
    <>
       {!showComponent ?
          <section className='ld-container'>
          <h3>SEE WHAT'S ON AT</h3>
          <form className='ld-form'>
          <input onClick={handleClick} placeholder='Bicester' className='ld-dropdown' name='locations'>
          </input>
          <button id='gobtn'>GO</button>
        </form>
      </section>
        : <section className='locations-container'>
          <h1 className='location-over-h1'>CHOOSE YOUR VUE</h1>
          <p>Browse VUE A-Z</p>
          <h3>Locations</h3>
          <LocationOver/>
        </section>        
        }
    </>

  )
}

export default LocationDropdown