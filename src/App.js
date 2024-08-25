
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header  from './components/Header';
import CarHomePage from './components/CarHomePage';
import AddPost from './components/AddPost/AddPost';
import Footer from './components/Footer';


function App() {

  const [login, setLogin] = useState(false);
  return (
    <Router>
    <div className="App">
      <Header login={login} />
      <Routes>
          <Route path="/" element={<CarHomePage />} />
          <Route path="/add_post" element={<AddPost setLogin={setLogin}/>} />      
      </Routes>
      <Footer />

    </div>
    </Router>
  );
}

export default App;
