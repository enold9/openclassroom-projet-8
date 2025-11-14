import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Banner from './components/Banner'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Projets from './pages/Projets'
import './style/style.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Banner />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projet/:pageNumber" element={<Projets />}/>
        </Routes>
    </Router>
  </React.StrictMode>
);