import React from 'react';
import { useState, useEffect } from 'react';
import './Course.css';

const Course = (props) => {
    const course = props.course;
    const topics = course.topics.map(element => <li key={element.code}>{element}</li>);
    const description = course.description;
    const [show, setShow] = useState(false);
    const [buttonValue, setButtonValue] = useState('More');
    console.log(buttonValue);

    const handleClick = () => {
        setShow(!show);
        if (buttonValue == 'More') {
            setButtonValue('Less');
        } else {
            setButtonValue('More');
        }

    }

    return (
        <div className="Course">
            <h3>{course.code}: {course.title}</h3>
            <input type="submit" value={buttonValue} onClick={handleClick} />
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
