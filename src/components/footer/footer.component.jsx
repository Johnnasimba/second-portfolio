import React from 'react';
import './footer.styles.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <h5 className="my-name">JOHN NASIMBA</h5>
                <p  className="quote">A program is never less than 90% complete</p>
                <p  className="quote">and</p>
                <p  className="quote">never more than 95% complete</p>
                <div className="social-media-icons">
                    {/* email */}
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <i className="far fa-envelope fa-lg"></i>
                    </a>
                    {/*linkedIn*/}
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in fa-lg"></i>
                    </a>
                    {/* facebook */}
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook fa-lg"></i>
                    </a>
                    {/* whatsApp */}
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp fa-lg"></i>
                    </a>
                    {/* Github */}
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github fa-lg"></i>
                    </a>
                </div>
                <div className="closing-marks">
                    <i className="far fa-copyright"></i>
                    <p>2020-21 <span className="footer-last-name">John Nasimba</span> | All Rights  Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
