import React from 'react';
import { useState } from 'react';
import './Course.css';

const Course = (props) => {
    const course = props.course;
    const topics = course.topics.map(element => <li key={element.code}>{element}</li>);
    const description = course.description;
    // const grade = course.grade;
    const [show, setShow] = useState(false);
    const [buttonValue, setButtonValue] = useState('More');
    console.log(buttonValue);

    const handleClick = () => {
        setShow(!show);
        if (buttonValue === 'More') {
            setButtonValue('Less');
        } else {
            setButtonValue('More');
        }

    }

    return (
        <div className="content">
            <div className="Course">
                <div className="Course-Heading">
                    <h3>{course.code}: {course.title} - {course.grade}</h3>
                    <button type="button" value={buttonValue} onClick={handleClick} >{buttonValue}</button>
                </div>
            { show ? <div className="more-info">
                <h4>{description}</h4>
                <ul>
                    {topics}
                </ul>
                </div> : null }
            </div>
        </div>
    );
};

export default Course;
