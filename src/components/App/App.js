import * as React  from 'react';
import { useState } from 'react';
import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
// import { getCities, getCitySummary, getWalkScores } from '../../apiCalls'
import SearchResults from '../SearchResult/SearchResults'


function App(props) {
  const [ query, setQuery ] = useState('')
  
  // const [ comparisonChart, setComparisonChart ] = useState([])
  const history = useHistory()

  const defineQuery = (cityType) => {
    const cityUrlName = cityType.split(' ').join('_')
    setQuery(cityUrlName)
    history.push(`search/${cityUrlName}`)
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => <LandingPage handleClick={defineQuery} />} />
        <Route exact path='/search/:cityType' render={( { match } ) => {
          return  <SearchResults query={query} />
        }} />
        
      </Switch>
    </div>
  );
}

export default App;
