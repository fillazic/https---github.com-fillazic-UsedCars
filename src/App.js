
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header  from './components/Header';
import CarHomePage from './components/CarHomePage';
import AddPost from './components/AddPost/AddPost';
import Footer from './components/Footer';

function App() {
  
  return (

   <Router>
    <div className="App">
      <Header  />
      <Routes>
          <Route path="/" element={<CarHomePage />} />
          <Route path="/add_post" element={<AddPost />} />   
      </Routes>
    <Footer />
   </div>
    </Router>

  );
}

export default App;
