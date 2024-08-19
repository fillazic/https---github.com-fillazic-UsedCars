
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header  from './components/Header';
import CarHomePage from './components/CarHomePage';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<CarHomePage />} />     
      </Routes>
      <Footer />

    </div>
    </Router>
  );
}

export default App;
