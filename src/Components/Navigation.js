import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

function Navigation () {
    return (
        <nav>
            <ul>
                <li className="left"><h1 className="leftheader">Melödify</h1></li>
                <li><NavLink to="/AboutUs">About Us</NavLink></li>
                <li><NavLink to="/Research">Research</NavLink></li>
                <li><NavLink to="/MusicGenerator">Music Generator</NavLink></li>
                <li><NavLink to="/" exact>Home</NavLink></li>

            </ul>
        </nav>
    );
}

export default Navigation;