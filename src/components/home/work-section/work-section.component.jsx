import React from 'react'

import './work-section.styles.css';

const WorkSection = () => {
    return (
        <div className="work-section">
           <h3 className="work">WORK</h3>
           <div className="work-description-and-image">
               <div className="work-description-and-button">
                   <p>I am always developing applications while constantly learning. I strongly believe in practice makes perfect. Check out some of the projects I have worked on. </p>
                   <button>
                       View Projects
                   </button>
               </div>
               <figure>
                   <img src="./images/work-image.png" alt="work environment" />
               </figure>
           </div>
        </div>
    )
}

export default WorkSection;