import './courses.css';
import Nav from '../Components/Nav/Nav.js';
import { classes } from '../data/classes';
import Course from '../Components/Course/Course.js';
import { useState } from 'react';

const Courses = () => {
    const allCourses = classes.map(element => <Course key={element.code} course={element} />);
    const [courses, setCourses] = useState(allCourses);

    const handleClick = (e) => {
        const targetYear = e.target.value;

        if (targetYear == 'all') {
            setCourses(allCourses);
            return;
        }

        const newCourses = allCourses.filter(element => {
            return element.props.course.year == targetYear;
        });

        setCourses(newCourses);
    };

    return (
        <div className="Courses">
            <Nav page="Courses" />
                <div className="main">
                    <div className="sorting">
                        <button value="1" onClick={handleClick}>Year 001</button>
                        <button value="2" onClick={handleClick}>Year 010</button>
                        <button value="3" onClick={handleClick}>Year 011</button>
                        <button id="four" value="4" onClick={handleClick}>Year 100</button>
                        <button value="all" onClick={handleClick}>All Years</button>
                    </div>
                    {courses}
                </div>
        </div>
    );
};

export default Courses;
