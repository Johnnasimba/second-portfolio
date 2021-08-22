import React from 'react'
import styled from 'styled-components';

import LandingSection from './landing-section/landing-section.component';
import AboutSection from './about-section/about-section.component';
import WorkSection from './work-section/work-section.component';
import WhatIDo from './what-i-do/what-i-do.component';
import Accomplishments from './accomplishments/accomplishments.component';
import ContactSection  from './contact-section/contact-section.component';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`;
const Home = () => {
    return (
        <Wrapper>
            <LandingSection />
            <AboutSection />
            <WorkSection />
            <WhatIDo />
            <Accomplishments />
            <ContactSection />          

        </Wrapper>
    )
}

export default Home;