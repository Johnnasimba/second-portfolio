import React from 'react';
import './header.styles.css';
import { ReactComponent as LogoIcon} from './logo.svg';

const Header = () => {
    return (
        <div className="header">
            <a className="logo" href="/">
                <LogoIcon />
            </a>
            <ul className="navigation-tabs">
                <li>
                    <a href="/">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="/">
                        About
                    </a>
                </li>
                <li>
                    <a href="/">
                        Micro-credentials
                    </a>
                </li>
                <li className="contact">
                    <a href="/">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Header;