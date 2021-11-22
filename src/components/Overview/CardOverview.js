import * as React from 'react';
import { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom'
import { ChartContext } from '../../context/ChartContext';
import PropTypes from 'prop-types';
import heartLogo from '../../Heart.jpeg'

export default function BasicCard( { city } ) {
  const { chart, dispatch } = useContext(ChartContext)
  const history = useHistory()

  const renderButton = () => {
    if(!chart.length || (!chart.some(cityChart => cityChart.id === city.id) && chart.length < 3)) {
      return <Button variant="contained" onClick={() => dispatch({type: 'ADD_CITY', city: city})}>Compare</Button>
    } else if(chart.some(cityChart => cityChart.id === city.id)) {
      return <Button variant="contained" onClick={() => dispatch({type: 'REMOVE_CITY', city: city})}>Delete</Button>
    }
  }

  return (
    <Card sx={{ minWidth: 275, maxWidth: 400, maxHeight: 750, display: 'flex', flexDirection: 'column',  alignItems: 'center'}}>
      <CardContent sx={{maxHeight: 600}}>
        <Typography sx={{ fontSize: 25, height: 50 }} color="text.secondary" gutterBottom>
          {city.displayTitle}
        </Typography>
        <Typography sx={{ fontSize: 20, paddingBottom: 3, height: 50 }} component="div">
          {city.description}
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: 3, height: 250, overflow: 'scroll' }}>
          {city.extract}
        </Typography>
        <Typography sx={{ mb: 1.7, fontWeight: 'bold' }} color="#2B86C2">
          <a href='https://www.walkscore.com/how-it-works/'>
          <img className='walk-score-logo' alt='walk scores logo' src="https://cdn.walk.sc/images/api-logo.png"/> 
          </a>
          {` ${city.walkScore}`}
          <a href='https://www.redfin.com/how-walk-score-works' >
            <img className='help-logo' src='https://cdn.walk.sc/images/api-more-info.gif' alt='help logo' />
          </a>
          <br/>
          {city.walkDescription}
          <br/> 
          <img alt='heart logo' src={heartLogo} className='walk-score-heart' />
          Bike Score: {city.bikeScore} 
          <br/>
          {city.bikeDescription} 
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', flexDirection: 'column',  alignItems: 'center'}}>
        {renderButton()}
        <Button variant="text" sx={{ paddingTop: 3 }} onClick={() => {
            history.goBack()
        }}>Take me back</Button>
      </CardActions>
    </Card>
  );
}

BasicCard.propTypes = {
  city: PropTypes.object.isRequired,
  chart: PropTypes.array.isRequired
}