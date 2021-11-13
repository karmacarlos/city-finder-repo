import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom'

export default function BasicCard( { city, addCity, removeCity }) {
  const [isInComparisonChart, setIsInComparisonChart] = useState(false)
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
        <Typography variant="body2" sx={{ marginBottom: 3, maxHeight: 250, overflow: 'scroll' }}>
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
        {!isInComparisonChart ? <Button variant="contained" onClick={() => {
          setIsInComparisonChart(!isInComparisonChart)
          addCity(city, setIsInComparisonChart, isInComparisonChart)
          }}>Compare</Button> : 
          <>
          <Typography sx={{ mb: 1.7 }} color="text.secondary">
          Added to comparison chart!
          </Typography>
          <Button variant="contained" onClick={() => {
            removeCity(city, setIsInComparisonChart, isInComparisonChart)
            }}>Delete</Button>
          </>
          }
          <Button variant="text" sx={{ paddingTop: 3 }} onClick={() => {
            history.goBack()
          }}>Take me back</Button>
      </CardActions>
    </Card>
  );
}