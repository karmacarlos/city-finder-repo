import * as React  from 'react';
import { getCities  } from '../../apiCalls'
import { useState, useEffect } from 'react';

import Card from './Card'
import './SearchResults.css'

const SearchResults = ( {  match } ) => {
  const [ cities, setCities ] = useState([])
  const [ error, setError ] = useState('')
  
  const cityType = match.params.cityType

  const filterCitiesData = (data) => {
    const newCities = data.data.map(city => {
      return {
        city: city.city,
        state: city.regionCode,
        latitude: city.latitude.toFixed(4),
        longitude: city.longitude.toFixed(4),
        population: city.population,
      }
    })
    return newCities
  }

  useEffect(() => {
    if (cityType.includes('Small')) {
      getCities(10000)
      .then(data => {
        const filteredCities = filterCitiesData(data)
        setCities(filteredCities)
      })
      .catch(error => setError(error))
    } 
    if (cityType.includes('Medium')) {
      getCities(50000)
      .then(data => {
        const filteredCities = filterCitiesData(data)
        setCities(filteredCities)
      })
      .catch(error => setError(error))
    }
    if (cityType.includes('Big')) {
      getCities(600000)
      .then(data => {
        const filteredCities = filterCitiesData(data)
        setCities(filteredCities)
      })
      .catch(error => setError(error))
    }
  }, [cityType])

  const cityCards = cities.map(cityInfo => {
    return (
      <Card city={cityInfo.city} state={cityInfo.state} population={cityInfo.population}
       lat={cityInfo.latitude} lon={cityInfo.longitude} />
    )
  })  

  return ( 
    <div className='search-view'>
      <h1>{`${cityType.split('_')[0]} Cities`}</h1>
      <div className='cities-pool'>
      {cityCards}
      </div>
    </div>
   );
}
 
export default SearchResults;