import React from 'react';
import './landing-section.styles.css';

const LandingSection = () => {
    return (
        <div className="landing-section">
            <div className="landing-section-content">
                <div className="profile-image">
                    <img src="./images/profile-image.jpg" alt="John Nasimba" />
                </div>
                <h3 className="my-name">John Nasimba</h3>
                <h1 className="job-title">Full-Stack Web Developer</h1>
                <div className="location">
                    <i className="fas fa-map-marker-alt"></i>
                    <p>Location: Cape Town, South Africa</p>
                </div>
            </div>               
        </div>
    )
}

export default LandingSection;