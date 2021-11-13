import * as React from 'react';
import { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom'
import { ChartContext } from '../../context/ChartContext';

export default function BasicCard( { city }) {
  const { chart, addCity, removeCity } = useContext(ChartContext)
  const history = useHistory()

  return (
    <Card sx={{ minWidth: 275, maxWidth: 450, display: 'flex', flexDirection: 'column',  alignItems: 'center'}}>
      <CardContent>
        <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
          {city.displayTitle}
        </Typography>
        <Typography sx={{ fontSize: 20, paddingBottom: 3 }} component="div">
          {city.description}
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: 3, height: 250, overflow: 'scroll' }}>
          {city.extract}
        </Typography>
        <Typography sx={{ mb: 1.7 }} color="text.secondary">
          Walk Score: {city.walkScore}
          <br/>
          {city.walkDescription}
          <br/>
          Bike Score: {city.bikeScore} 
          <br/>
          {city.bikeDescription} 
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', flexDirection: 'column',  alignItems: 'center'}}>
        {(chart.some(cityChart => cityChart.id !== city.id) || !chart.length) && 
          <Button variant="contained" onClick={() => {
            addCity(city)}}>Compare</Button>}
        {chart.some(cityChart => cityChart.id === city.id) &&
          <Button variant="contained" onClick={() => {
            removeCity(city)}}>Delete</Button>}
          <Button variant="text" sx={{ paddingTop: 3 }} onClick={() => {
            history.goBack()
          }}>Take me back</Button>
      </CardActions>
    </Card>
  );
}