import * as React  from 'react';
import uniqueString from 'unique-string';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import Card from '../Overview/CardOverview'
import './ComparisonChart.css'

const ComparisonChart = ( { cities, removeCity } ) => {

  const history = useHistory()

  const citiesToRender = cities.map(city => {
    return <Card city={city} key={uniqueString()} removeCity={removeCity} />
  })

  return ( 
    <div className='compare'>
      <div className='nav-compare'>
      <Button variant="text" sx={{ paddingTop: 1, fontSize: 30 }} onClick={() => {
            history.push('/')
          }}>Home</Button>
      <h1 className='compare-title'>COMPARE</h1>
      <Button variant="text" sx={{ paddingTop: 1, fontSize: 30 }} onClick={() => {
            history.goBack()
          }}>Take me back</Button>
      </div>
      <div className='card-container'>
       {citiesToRender}
      </div>
    </div>
   );
}
 
export default ComparisonChart;