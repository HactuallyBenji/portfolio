import './App.css';
import Nav from './Components/Nav/Nav';
import Video from './Components/Video/Video';

function App() {
  return (
    <div className="App">
      <Nav page="Home    " />
        <article>
          <section className="introduction">

            Hi, my name is

            <br />
            <span id="name"> Benjamin Miller.</span>
            <br /> 
      
            <span id="specialization"> I'm a fullstack web developer.</span>

            <p>
                I'm a software engineer in my final year at the University of Victoria studying Computer Science,
                with a focus on fullstack web development. 
            </p>

            <p>
                Here are the latest technologies I've been working with:
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
        </article>
    </div>
  );
}

export default App;
