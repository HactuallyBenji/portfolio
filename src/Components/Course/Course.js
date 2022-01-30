import React from 'react';
import { useState, useEffect } from 'react';

const Course = (props) => {
    const course = props.course;
    const topics = course.topics.map(element => <li key={element.code}>{element}</li>);
    const description = course.description;
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    }

    return (
        <div className="Course">
            <input type="submit" value="More" onClick={handleClick} />
            <h3>{course.code}: {course.title}</h3>
        { show ? <div>
            <h4>{description}</h4>
            <ul>
                {topics}
            </ul>
            </div> : null }
        </div>
    );
};

export default Course;
