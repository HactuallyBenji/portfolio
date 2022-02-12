import './App.css';
import Nav from './Components/Nav/Nav';
import Video from './Components/Video/Video';

function App() {
  return (
    <div className="App">
      <Nav page="Home    " />
      <div className="video-section">
          <Video src="https://www.youtube.com/embed/kA9Pdu-IblI" />
          <Video src="https://www.youtube.com/embed/XH84pIwzLCA" />
      </div>
    </div>
  );
}

export default App;
