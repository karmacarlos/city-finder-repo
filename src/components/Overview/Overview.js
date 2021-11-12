import * as React  from 'react';
import { getCitySummary, getWalkScores } from '../../apiCalls'
import { useState, useEffect } from 'react';
import Card from './CardOverview'
import './Overview.css'

const Overview = ( { match } ) => {
  const [ cityDetails, setCityDetails ] = useState({})
  
  const city = match.params.city
  const state = match.params.state

  useEffect(() => {
    getCitySummary(city)
    .then(data => {
      const cityObject = {
        coordinates: data.coordinates,
        description: data.description,
        displayTitle: data.displaytitle,
        state: state,
        extract: data.extract,
        image: data.originalimage.source,
      }
      console.log('cityObject',cityObject)
      setCityDetails(cityObject)
    })
    .then(() => getWalkScores(city, state, cityDetails.coordinates.lat, cityDetails.coordinates.lon))
    .then(data => console.log('walkScores',data))
  }, [city, state])

  return ( 
    <div className='overview'>
      <h1>I'm rendering</h1>
    </div>
   );
}
 
export default Overview;

