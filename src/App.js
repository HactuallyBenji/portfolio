import './App.css';
import Nav from './Components/Nav/Nav';
import Video from './Components/Video/Video';

function App() {
  return (
    <div className="App">
      <Nav id="nav" page="Home    " />
        <article>
          <section className="introduction">
            <p>
            Hi, my name is
            </p>

            <p id="name-specialization">
                <span id="name"> Benjamin Miller.</span><br />
      
                <span id="specialization"> I'm a fullstack web developer.</span>
            </p>

            <p>
                I'm in my final year at the University of Victoria studying Computer Science,
                with a focus on fullstack web development. 
            </p>

            <p>
                Here are some of the technologies I've been working with recently:
            </p>

            <ul id="technologies">
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Node.js</li>
                <li>TypeScript</li>
                <li>Selenium</li>
                <li>Jest</li>
            </ul>
        
          </section>
          <section className="about">
            
          </section>
           
        </article>
    </div>
  );
}

export default App;
