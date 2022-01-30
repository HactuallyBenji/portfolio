import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>HactuallyBenji</h1>
      <Link to="/courses">Courses</Link>
    </div>
  );
}

export default App;
