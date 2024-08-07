import logo from './logo.svg';
import './App.css';
import Header  from './components/Header';
import Vehicle from './components/Vehicle';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='vehicle-path'>
      <Vehicle/>
      </div>
      <Form />
    </div>
  );
}

export default App;
