import * as React  from 'react';
import { getCities  } from '../../apiCalls'
import { useState, useEffect } from 'react';
import uniqueString from 'unique-string';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import Card from './Card'
import './SearchResults.css'

const SearchResults = ( {  match } ) => {
  const [ cities, setCities ] = useState([])
  const [ error, setError ] = useState('')
  const history = useHistory()
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
       lat={cityInfo.latitude} lon={cityInfo.longitude} key={uniqueString()} />
    )
  })  

  return ( 
    <div className='search-view'>
      <div className='nav'>
      <Button variant="text" sx={{ paddingTop: 1, fontSize: 30 }} onClick={() => {
            history.goBack()
          }}>Home</Button>
      <h1>{`${cityType.split(' ')[0]} Cities`}</h1>
      <Button variant="text" sx={{ paddingTop: 1, fontSize: 30 }} onClick={() => {
            history.push('/compare')
          }}>Compare</Button>
      </div>
      <div className='cities-pool'>
      {cityCards}
      </div>
    </div>
   );
}
 
export default SearchResults;