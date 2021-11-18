import * as React  from 'react';
import { useContext } from 'react';
import uniqueString from 'unique-string';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import Card from '../Overview/CardOverview'
import './ComparisonChart.css'
import { ChartContext } from '../../context/ChartContext';
import PropTypes from 'prop-types'
import blueLogo from '../../city-logo.png'

const ComparisonChart = () => {
  const { chart } = useContext(ChartContext)
  const history = useHistory()

  const citiesToRender = chart.map(city => {
    return <Card city={city} key={uniqueString()} />
  })

  return ( 
    <div className='compare'>
      <div className='nav-compare'>
      <img alt='city-logo' src={blueLogo} onClick={() => history.goBack()} />
      <h1 className='compare-title'>COMPARE</h1>
      <Button variant="text" sx={{ paddingTop: 1, fontSize: '2rem', color: '#F26A1B' }} onClick={() => {
            history.goBack()
          }}>Back</Button>
      </div>
      <div className='card-container'>
       {!chart.length && <h2>Try adding some cities to compare</h2>}
       {citiesToRender}
      </div>
    </div>
   );
}
 
export default ComparisonChart;

ComparisonChart.propTypes = {
  chart: PropTypes.array.isRequired
}