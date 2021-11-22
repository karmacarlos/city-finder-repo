import * as React from 'react';
import Buttons from './Buttons';
import './LandingPage.css';
import whiteLogo from '../../city-logo-white.png'

const LandingPage = () => {
  return ( 
    <div className='landing-page'>
      <div className='welcome-container'>
        <div className='logo-container'>
        <h1>Welcome to </h1>
        <img alt='city-logo' src={whiteLogo}/>
        </div>
        <h2>We can help you decide where to move next</h2>
        <h3>Choose the size of the city you want to live next</h3>
      </div>
      <Buttons />
    </div>
   );
}
 
export default LandingPage;
