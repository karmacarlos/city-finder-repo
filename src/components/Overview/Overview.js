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
      // console.log(data)
      const cityObject = {
        // coordinates: data.coordinates,
        latitude: data.coordinates.lat,
        longitude: data.coordinates.lon,
        description: data.description,
        displayTitle: data.displaytitle,
        state: state,
        extract: data.extract,
        image: data.originalimage.source,
      }
      setCityDetails({...cityObject})
    })
    .then(() => getWalkScores(city, state, cityDetails.latitude, cityDetails.longitude))
    .then(data => {
      console.log(data)
      setCityDetails({
        ...cityDetails,
        walkScore: data.walkscore,
        walkDescription: data.description,
        bikeDescription: data.bike.description,
        bikeScore: data.bike.score,
      })
    })
  }, [city, state])

  return ( 
    <div className='overview'>
      <h1>I'm rendering</h1>
    </div>
   );
}
 
export default Overview;

