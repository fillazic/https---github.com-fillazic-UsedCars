import logo from './logo.svg';
import './App.css';
import Header  from './components/Header';
import Vehicle from './components/Vehicle';
import Form from './components/Form';
import Posts from './components/Posts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='vehicle-path'>
      <Vehicle/>
      </div>
      <Form />
      <Posts />
      <Footer />
    </div>
  );
}

export default App;
