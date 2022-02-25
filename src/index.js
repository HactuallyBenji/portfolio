import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Experience from './routes/experience';
import Courses from './routes/courses';
import Projects from './routes/projects';
import reportWebVitals from './reportWebVitals';
import { 
    BrowserRouter,
    Routes,
    Route 
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="experience" element={<Experience />} />
            <Route path="courses" element={<Courses />} />
            <Route path="projects" element={<Projects />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
