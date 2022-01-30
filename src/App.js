import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav page="Home" />
    </div>
  );
}

export default App;
