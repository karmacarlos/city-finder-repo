import * as React  from 'react';
import { useState } from 'react';
import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
// import { getCities, getCitySummary, getWalkScores } from '../../apiCalls'
import SearchResults from '../SearchResult/SearchResults'
import Overview from '../Overview/Overview';


function App(props) {
  const [ comparisonChart, setComparisonChart ] = useState([])
  // const queryParam = 50000
  // fetch(`http://localhost:3001/geoDB/${queryParam}`)
  // .then(response => response.json()).then(data => console.log(data))

  const addCityToChart = (city, setIsInComparisonChart, isInComparisonChart) => {
    if (comparisonChart.length < 3 && !comparisonChart.some(cityState => cityState.id === city.id)) {
    setComparisonChart( [...comparisonChart, city] ) 
    setIsInComparisonChart(!isInComparisonChart)
    }
  }

  const removeCity = (city, setIsInComparisonChart, isInComparisonChart) => {
    const filteredCities = comparisonChart.filter(cityState => {
      return city.id !== cityState.id
    })
    setComparisonChart(filteredCities)
    setIsInComparisonChart(!isInComparisonChart)
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => <LandingPage />} />
        <Route exact path='/search/:cityType' render={( { match } ) => {
          return  <SearchResults match={match} />
        }} />
        <Route exact path='/:city/:state/:lat/:lon' render={( { match } ) => 
          <Overview match={ match } addCity={addCityToChart} removeCity={removeCity} />} />
      </Switch>
    </div>
  );
}

export default App;
