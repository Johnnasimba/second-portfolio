import React from 'react'

import './home.styles.css';

import LandingSection from './landing-section/landing-section.component';
import AboutSection from './about-section/about-section.component';
import WorkSection from './work-section/work-section.component';

const Home = () => {
    return (
        <div className="home-container">
            <LandingSection />
            <AboutSection />
            <WorkSection />
            
            <div className="what-i-do-section">

            </div>

        </div>
    )
}

export default Home;