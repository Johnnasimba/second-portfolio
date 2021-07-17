import React from 'react';
import ClothingStore from './clothing-store/clothing-store.component';
import HoutBay from './houtbay-job-seekers/houtbay.component';
import InfinityScroll from './infinity-scroll/infinity-scroll.component';
import DarkMode from './light-and-dark-mode/dark-mode.component';


import './projects.styles.css'

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>PROJECTS</h2>
            <div className="project-list">
                <ClothingStore />
                <HoutBay />
                <DarkMode />
                <InfinityScroll />
            </div>
        </div>
    )
}


export default Projects;

