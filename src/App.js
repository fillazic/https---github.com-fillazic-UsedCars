import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header  from './components/Header';
import CarHomePage from './components/CarHomePage';
import AddPost from './components/AddPost/AddPost';
import FullPost from './components/FullPost';
import Footer from './components/Footer';
import SearchPage from './components/SearchPage';
import Login from './components/Login';

function App() {

  const [search, setSearch ]= useState(false);
  const searchHandler = () => {
    setSearch(!search);
  };

  return (

   <Router>
    <div className="App">
      <Header searchForm={searchHandler} />
      <Routes>
          <Route path="/" element={<CarHomePage search={search} />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/car/:id" element={<FullPost />} />
          <Route path="/add_post" element={<AddPost />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    <Footer />
   </div>
    </Router>

  );
}

export default App;
