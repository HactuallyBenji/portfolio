import './courses.css';
import Nav from '../Components/Nav/Nav.js';
import { classes } from '../data/classes';

const Courses = () => {
    const allCourses = classes.map(element => <li key={element.code}>{element.code}: {element.title}</li>);

    return (
        <div className="Courses">
            <Nav page="Courses" />
            <ul>
                {allCourses}
            </ul>
        </div>
    );
};

export default Courses;
