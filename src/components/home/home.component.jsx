import React from 'react'

import './home.styles.css';

import LandingSection from './landind-section/landing-section.component';

const Home = () => {
    return (
        <div className="home-container">
            {/* landing section */}
            <LandingSection />
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