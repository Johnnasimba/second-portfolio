import React from 'react';
import DescriptionSection from './description/description-section.component';
import OutsideWorkSection from './outside-work/outside-work.component';
import SkillsSection from './skills/skills-section.component';
import WorkTogetherSection from './work-together/work-together.component';

import styled from 'styled-components';


const AboutPage = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    background: #1B3447;
    // transition: all 0.5s ease-in-out;
`;


const About = () => {
    return (
        <AboutPage>
            <DescriptionSection />
            <SkillsSection />
            <OutsideWorkSection />
            <WorkTogetherSection />
        </AboutPage>
    )
}

export default About;

