import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider 
    domain="dev-em0q94b5.us.auth0.com" 
    clientId="X8Z4i8tzWcKsMLVQtrdgcJG8wbEMi3VV" 
    redirectUri={window.location.origin}
    >
     <App />

    </Auth0Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);