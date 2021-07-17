import React from 'react';



const InfinityScroll = () => {
    return (
        <div className="project clothing-store">
           
            <div className="project-details">
                <h4 className="project-title">
                  INFINITY SCROLL
                </h4>
                <p className="project-description">
                The project demonstrates how infinity scrolling, commonly used on social media platforms, can be implemented using Javascript.
                </p>
                <div className="project-languages">
                    <img src="./images/icons/js.png" alt="JavaScript"  />
                    <img src="./images/icons/html.png" alt="HTML"  />
                    <img src="./images/icons/css.png" alt="CSS"  />
                </div>
                <div className="project-links">
                    <a href="https://johnnasimba.github.io/Infinite-Scroll/" target="_blank" rel="noopener noreferrer" className="primary-button">
                       <span>View The Site</span>  
                    </a>
                    <a href="https://github.com/Johnnasimba/Infinite-Scroll" target="_blank" rel="noopener noreferrer" className="secondary-button">
                        <span>Source Code</span> 
                    </a>
                </div>
            </div>
            <div className="project-image">
                <img src="./images/projects-illustrations/infinity-scroll.png" alt="Light and Dark mode" />

            </div>
        </div>
    )
}

export default InfinityScroll;

