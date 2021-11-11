import * as React  from 'react';
import { useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import { getCities, getCitySummary } from '../../apiCalls'

function App() {
  const [ cities, setCities ] = useState([])
  const [ error, setError ] = useState('')
  const [ comparisonChart, setComparisonChart ] = useState([])

  // const 

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
