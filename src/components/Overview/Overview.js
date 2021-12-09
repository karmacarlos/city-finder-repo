import * as React  from 'react';
import { getCitySummary, getWalkScores } from '../../apiCalls';
import { useState, useEffect } from 'react';
import Card from './CardOverview';
import './Overview.css';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import blueLogo from '../../city-logo.png'

const Overview = ( { match } ) => {
  const [ cityDetails, setCityDetails ] = useState({});
  const [ walkScores, setWalkScores ] = useState({});
  const [ error, setError ] = useState('')
  const history = useHistory()
  const city = match.params.city;
  const state = match.params.state;
  const lat = match.params.lat;
  const lon = match.params.lon;

  useEffect(() => {
    getCitySummary(city)
    .then(data => {
      if (data.originalimage) {
        const cityObject = {
          id: data.pageid,
          description: data.description,
          displayTitle: data.displaytitle,
          state: state,
          extract: data.extract,
          image: data.originalimage.source,
        }
        return setCityDetails({...cityObject})
      } else {
        const cityObject = {
          id: data.pageid,
          description: data.description,
          displayTitle: data.displaytitle,
          state: state,
          extract: data.extract,
        }
        return setCityDetails({...cityObject})
      }
    })
    .catch(error => {
      console.log('wiki error',error)
      setError(error)
    })
    getWalkScores(city, state, lat, lon)
    .then(data => {
      if(data.bike) {
      setWalkScores({
        walkScore: data.walkscore,
        walkDescription: data.description,
        bikeDescription: data.bike.description,
        bikeScore: data.bike.score,
      })
    } else {
      setWalkScores({
        walkScore: data.walkscore,
        walkDescription: data.description,
      })
    }
    })
    .catch(error => {
      console.log('walkscore error',error)
      setError(error)
    })
  }, [city, state, lat, lon])

  return ( 
    <div className='overview'>
      <div className='overview-nav'>
      <img className='city-img' alt='city-logo' src={blueLogo} onClick={() => history.push('/')} />
        <h1>{cityDetails.displayTitle}</h1>
        <Button variant="text" sx={{ paddingTop: 1, fontSize: '2rem', color: '#F26A1B' }} onClick={() => {
            history.push('/compare')
          }}>Compare</Button>
        </div>
      <div className='city-dashboard'>
        {cityDetails.image ? <img alt={`${cityDetails.displayTitle}`} src={cityDetails.image} /> :
        <h2>We are sorry, we don't have an image for this city</h2>}
        {error ? <h3>We are sorry, try again with another city</h3> : <Card city={{...cityDetails, ...walkScores}} /> }       
      </div>
    </div>
   );
}
 
export default Overview;

Overview.propTypes = {
  match: PropTypes.object.isRequired
}
 