import * as React  from 'react';
import { getCitySummary, getWalkScores } from '../../apiCalls'
import { useState, useEffect } from 'react';
import Card from './CardOverview'
import './Overview.css'

const Overview = ( { match } ) => {
  const [ cityDetails, setCityDetails ] = useState({})
  const [ walkScores, setWalkScores ] = useState({})
  
  const city = match.params.city
  const state = match.params.state
  const lat = match.params.lat
  const lon = match.params.lon

  useEffect(() => {
    getCitySummary(city)
    .then(data => {
      // console.log(data)
      if (data.originalimage) {
        const cityObject = {
          latitude: lat,
          longitude: lon,
          description: data.description,
          displayTitle: data.displaytitle,
          state: state,
          extract: data.extract,
          image: data.originalimage.source,
        }
        return setCityDetails({...cityObject})
      } else {
        const cityObject = {
          latitude: lat,
          longitude: lon,
          description: data.description,
          displayTitle: data.displaytitle,
          state: state,
          extract: data.extract,
        }
        return setCityDetails({...cityObject})
      }
    })
    getWalkScores(city, state, lat, lon)
    .then(data => {
      // console.log(data)
      setWalkScores({
        walkScore: data.walkscore,
        walkDescription: data.description,
        bikeDescription: data.bike.description,
        bikeScore: data.bike.score,
      })
    })
  }, [city, state, lat, lon])

  return ( 
    <div className='overview'>
      <h1>{cityDetails.displayTitle}</h1>
      <div className='city-dashboard'>
        {cityDetails.image ? <img alt={`${cityDetails.displayTitle}`} src={cityDetails.image} /> :
        <h2>We are sorry, we don't have an image for this city</h2>}
        <Card cityDetails={cityDetails} walkScores={walkScores} />        
      </div>
    </div>
   );
}
 
export default Overview;

