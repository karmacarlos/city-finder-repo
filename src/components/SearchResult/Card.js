import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom'

export default function BasicCard( { city, state, population, lat, lon } ) {
  const history = useHistory()
  const showOverview = () => {
    history.push(`/${city}/${state}/${lat}/${lon}`)
  }

  return (
    <Card sx={{ width: 275, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          City
        </Typography>
        <Typography variant="h5" component="div">
          {`${city},${state}`}
        </Typography>
        <Typography variant="body2">
          {`Population: ${population.toLocaleString()}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => showOverview()}>Details</Button>
      </CardActions>
    </Card>
  );
}