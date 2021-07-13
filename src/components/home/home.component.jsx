import React from 'react'

import './home.styles.css';

const Home = () => {
    return (
        <div className="home-container">
            {/* landing section */}
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
            {/* About me section */}
            <div className="about-section">
                
            </div>
            {/* Work section */}
            <div className="work-section">

            </div>
            {/* What I do section */}
            <div className="what-i-do-section">

            </div>

        </div>
    )
}

export default Home;