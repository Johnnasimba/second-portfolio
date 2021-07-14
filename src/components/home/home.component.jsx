import React from 'react'

import './home.styles.css';

import LandingSection from './landing-section/landing-section.component';
import AboutSection from './about-section/about-section.component';
import WorkSection from './work-section/work-section.component';
import WhatIDo from './what-i-do/what-i-do.component';
import Accomplishments from './accomplishments/accomplishments.component';

const Home = () => {
    return (
        <div className="home-container">
            <LandingSection />
            <AboutSection />
            <WorkSection />
            <WhatIDo />
            <Accomplishments />
            

        </div>
    )
}

export default Home;