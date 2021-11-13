import * as React  from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import SearchResults from '../SearchResult/SearchResults'
import Overview from '../Overview/Overview';
import ComparisonChart from '../ComparisonChart/ComparisonChart';
import ChartContextProvider from '../../context/ChartContext';


function App(props) {
  return (
    <div className="App">
      <ChartContextProvider>
        <Switch>
          <Route exact path='/' render={() => <LandingPage />} />
          <Route exact path='/search/:cityType' render={( { match } ) => {
            return  <SearchResults match={match} />
          }} />
          <Route exact path='/:city/:state/:lat/:lon' render={( { match } ) => 
            <Overview match={ match } />} />
          <Route exact path='/compare'  
            render={() => <ComparisonChart />} />  
        </Switch>
      </ChartContextProvider>
    </div>
  );
}

export default App;
