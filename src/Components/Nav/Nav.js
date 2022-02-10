import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {
    const currentPage = props.page;
    console.log(currentPage);
    return (
        <div>
            <h1>HactuallyBenji</h1>
            <h3>{currentPage}</h3>
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/projects">Projects</Link>
        </div>
    );
};

export default Nav;
