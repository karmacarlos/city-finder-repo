import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard( { cityDetails, walkScores }) {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 450, display: 'flex', flexDirection: 'column',  alignItems: 'center'}}>
      <CardContent>
        <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
          {cityDetails.displayTitle}
        </Typography>
        <Typography sx={{ fontSize: 20, paddingBottom: 3 }} component="div">
          {cityDetails.description}
        </Typography>
        <Typography variant="body2" sx={{ paddingBottom: 3 }}>
          {cityDetails.extract}
        </Typography>
        <Typography sx={{ mb: 1.7 }} color="text.secondary">
          Walk Score: {walkScores.walkScore}
          <br/>
          {walkScores.walkDescription}
          <br/>
          Bike Score: {walkScores.bikeScore} 
          <br/>
          {walkScores.bikeDescription} 
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" >Compare</Button>
      </CardActions>
    </Card>
  );
}