import React from 'react'

import './home.styles.css';

import LandingSection from './landind-section/landing-section.component';
import AboutSection from './about-section/about-section.component';

const Home = () => {
    return (
        <div className="home-container">
            <LandingSection />
            <AboutSection />
            <div className="work-section">

            </div>
            {/* What I do section */}
            <div className="what-i-do-section">

            </div>

        </div>
    )
}

export default Home;