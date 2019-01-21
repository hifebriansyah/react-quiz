import React from 'react';
import { Link } from "react-router-dom";
import '../styles/menu.css';

const Menu = (props) => {
    return(
        <div className="menu">
            <Link to="/">{props.ts("Modules")}</Link>
            <Link to="/">{props.ts("Articles")}</Link>
            <Link to="/">{props.ts("About Us")}</Link>
            <span>v1.0</span>
        </div>
    )
}

export default Menu;