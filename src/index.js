import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-tunpnb2c.us.auth0.com"
    clientId="4gZJIfEBHdXcHUjNv39h4Z5d4zAxgY7C"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
    useRefreshTokens={true}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
