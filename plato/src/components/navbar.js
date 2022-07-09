import React from 'react';
import RoterS from "./roterS";
import {Link} from "react-router-dom";
import "../css/navbar.css";
function Navbar(props) {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contacts">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
