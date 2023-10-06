import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import HouseContextProvider from './components/HouseContext';

ReactDOM.createRoot(document.getElementById('root')).render(
 <HouseContextProvider>
  <BrowserRouter>
        <React.StrictMode>
          <App />
      </React.StrictMode>
    </BrowserRouter>
  </HouseContextProvider>
)

 
