import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from "@auth0/auth0-react";
import { ProSidebarProvider } from 'react-pro-sidebar';
ReactDOM.createRoot(document.getElementById('root')).render(
  <ProSidebarProvider>
  <Auth0Provider
    domain="dev-lov4snj0impacs2n.us.auth0.com"
    clientId="l4W9Tj3JbmupvtR62zX5eiAd9Om9aneZ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
<BrowserRouter>
      <App />
    </BrowserRouter>
    </Auth0Provider>
    </ProSidebarProvider>
  ,
)
