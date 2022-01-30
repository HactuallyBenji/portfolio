import './courses.css';
import Nav from '../Components/Nav/Nav.js';
import { classes } from '../data/classes';
import Course from '../Components/Course/Course.js';

const Courses = () => {
    const allCourses = classes.map(element => <Course key={element.code} course={element} />);

    return (
        <div className="Courses">
            <Nav page="Courses" />
            {allCourses}
        </div>
    );
};

export default Courses;
