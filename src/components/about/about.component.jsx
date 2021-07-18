import React from 'react';
import DescriptionSection from './description/description-section.component';
import OutsideWorkSection from './outside-work/outside-work.component';
import SkillsSection from './skills/skills-section.component';
import WorkTogetherSection from './work-together/work-together.component';

import './about.styles.css'


const About = () => {
    return (
        <div className="about-page">
            <DescriptionSection />
            <SkillsSection />
            <OutsideWorkSection />
            <WorkTogetherSection />
        </div>
    )
}

export default About;

