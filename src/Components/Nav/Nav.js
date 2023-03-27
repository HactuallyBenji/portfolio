import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {
    const currentPage = props.page;
    console.log(currentPage);
    return (
        <nav className="Navigation-bar">
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/projects">Projects</Link>
        </nav>
    );
};

export default Nav;
