import * as React  from 'react';
import { getCities  } from '../../apiCalls'
import { useState, useEffect } from 'react';
import Card from './Card'
import './SearchResults.css'

const SearchResults = ( { query } ) => {
  const [ cities, setCities ] = useState([])
  const [ error, setError ] = useState('')

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
    if (query.includes('Small')) {
      getCities(50000)
      .then(data => {
        // console.log(data.data)
        const filteredCities = filterCitiesData(data)
        console.log(filteredCities)
        setCities(filteredCities)
      })
      .catch(error => setError(error))
    } 
    if (query.includes('Medium')) {
      getCities(200000)
      .then(data => {
        const filteredCities = filterCitiesData(data)
        setCities(filteredCities)
      })
      .catch(error => setError(error))
    }
    if (query.includes('Big')) {
      getCities(900000)
      .then(data => {
        const filteredCities = filterCitiesData(data)
        setCities(filteredCities)
      })
      .catch(error => setError(error))
    }
  }, [query])

  const cityCards = cities.map(cityInfo => {
    return (
      <Card city={cityInfo.city} state={cityInfo.state} population={cityInfo.population} />
    )
  })  

  return ( 
    <div className='search-view'>
      <h1>{`${query.split('_')[0]} Cities`}</h1>
      <div className='cities-pool'>
      {cityCards}
      </div>
    </div>
   );
}
 
export default SearchResults;