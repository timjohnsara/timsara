import React, {} from 'react';
import {NavLink} from "react-router-dom";

export default function Navigation() {
    return <nav className="nav">
        <ul className='nav-links'>
            <li><NavLink to="/" activeclassname="active"><i className="fas fa-home"></i><small>Home</small></NavLink></li>
            {/*<li><NavLink to="/header" activeclassname="active"><i className="fas fa-info-circle"></i><small>About</small></NavLink></li>*/}
            <li><NavLink to="/resume" activeclassname="active"><i className="fas fa-list"></i><small>Resume</small></NavLink></li>
            <li><NavLink to="/music" activeclassname="active"><i className="fas fa-music"></i><small>Music</small></NavLink></li>
            <li><NavLink to="/contact" activeclassname="active"><i className="fas fa-envelope"></i><small>Contact</small></NavLink></li>
        </ul>
    </nav>
}