import * as React from 'react';
import Buttons from './Buttons';
import './LandingPage.css';

const LandingPage = ( { handleClick }) => {
  return ( 
    <div className='landing-page'>
      <div className='welcome-container'>
        <h1>Welcome to city finder</h1>
        <h2>We can help you decide where to move next</h2>
        <h3>Choose the size of the city you want to live next</h3>
      </div>
      <Buttons handleClick={handleClick} />
    </div>
   );
}
 
export default LandingPage;
