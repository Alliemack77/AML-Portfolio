import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './Components/Header';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Portfolio />
        <Contact />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
