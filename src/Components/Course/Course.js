import React from 'react';


const Course = (props) => {
    const course = props.course;
    const topics = course.topics.map(element => <li key={element.code}>{element}</li>);
    const description = course.description;

    return (
        <div className="Course">
            <h3>{course.code}: {course.title}</h3>
            <h4>{description}</h4>
            <ul>
                {topics}
            </ul>
        </div>
    );
};

export default Course;
