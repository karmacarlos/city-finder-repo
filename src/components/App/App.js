import * as React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'

function App() {

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
