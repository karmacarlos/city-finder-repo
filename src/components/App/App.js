import * as React  from 'react';
import { useState } from 'react';
import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
// import { getCities, getCitySummary, getWalkScores } from '../../apiCalls'
import SearchResults from '../SearchResult/SearchResults'
import Overview from '../Overview/Overview';


function App(props) {
  // const [ comparisonChart, setComparisonChart ] = useState([])
  const history = useHistory()

  const defineQuery = (cityType) => {
    history.push(`search/${cityType}`)
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => <LandingPage handleClick={defineQuery} />} />
        <Route exact path='/search/:cityType' render={( { match } ) => {
          return  <SearchResults match={match} />
        }} />
        <Route exact path='/:city/:state/:lat/:lon' render={( { match } ) => <Overview match={ match } />} />
      </Switch>
    </div>
  );
}

export default App;
