import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalContextProvider } from './GlobalContext';
import { ThemeContextProvider } from './ThemeContext';
import App from './App'
import Login from './components/Login/Login';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <ThemeContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </GlobalContextProvider>
  </React.StrictMode>
)
