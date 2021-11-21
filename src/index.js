import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material/styles';

const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    {router} 
  </StyledEngineProvider>,
  document.getElementById('root')
  );

reportWebVitals();
