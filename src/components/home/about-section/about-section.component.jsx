
import React from 'react';

import './about-section.styles.css';

const AboutSection = () => {
    return (
        <div className="about-section">
           <h2 className="about">ABOUT</h2>
           <div className="image-and-short-description">
               <figure>
                    <img src="/images/about-image.png" alt="John Nasimba"/>
               </figure>
               <div className="description-and-button">
                   <p>I am a professional web developer with a great passion for learning. I love developing websites from scratch starting with designing, front-end development, back-end development, APIs development, web hosting and many more.</p>
                   <button>About Me</button>
               </div>
           </div>
        </div>
    )
}

export default AboutSection;

