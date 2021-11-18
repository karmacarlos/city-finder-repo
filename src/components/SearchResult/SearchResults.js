import * as React  from 'react'
import { getCities  } from '../../apiCalls'
import { useState, useEffect } from 'react'
import uniqueString from 'unique-string'
import Button from '@mui/material/Button'
import { useHistory } from 'react-router-dom'
import Card from './Card'
import './SearchResults.css'
import PropTypes from 'prop-types'
import blueLogo from '../../city-logo.png'

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
        console.log(data)
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
          <img alt='city-logo' src={blueLogo} onClick={() => history.goBack()} />
      <h1>{`${cityType.split(' ')[0]} Cities`}</h1>
      <Button variant="text" sx={{ paddingTop: 1, fontSize: '2rem', color: '#F26A1B' }} onClick={() => {
            history.push('/compare')
          }}>Compare</Button>
      </div>
      <div className='cities-pool'>
        {(!cities.length && !error) && <h2>...Loading Cities...</h2>}
        {error && <h3>Something went wrong, please try again later</h3>}
        {cityCards}
      </div>
    </div>
   );
}
 
export default SearchResults;

SearchResults.propTypes = {
  match: PropTypes.object.isRequired
}