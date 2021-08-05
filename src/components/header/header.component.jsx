import React from 'react';
import './header.styles.css';
import { ReactComponent as LogoIcon} from './logo.svg';

import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <NavLink className="logo" to="/">
                <LogoIcon />
            </NavLink>
            <ul className="navigation-tabs">
                <li className="tab">
                    <NavLink to="/projects">
                        Projects
                    </NavLink>
                </li>
                <li className="tab">
                    <NavLink to="/about">
                        About
                    </NavLink>
                </li>
                <li className="tab">
                    <a href="https://micro-credentials.herokuapp.com/" target="_blank" rel="noopener noreferrer">Micro-credentials</a>
                </li>
                <li className="tab contact">
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header;