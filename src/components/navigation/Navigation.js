import React, {} from 'react';
import {Link} from "react-router-dom";

export default function Navigation() {
    // const [open, setOpen] = useState(false);
    return <nav className="nav">
        <ul className='nav-links'>
            <li><Link to="/header"><i className="fas fa-info-circle"></i></Link></li>
            <li><Link to="/portfolio"><i className="fas fa-list"></i></Link></li>
            <li><Link to="/music"><i className="fas fa-music"></i></Link></li>
        </ul>
    </nav>
}