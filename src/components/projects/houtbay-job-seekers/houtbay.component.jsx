import React from 'react';

import './houtbay.styles.css';

const HoutBay = () => {
    return (
        <div className="project clothing-store">
            
            <div className="project-details">
                <h4 className="project-title">
                   HOUT BAY JOB SEEKERS
                </h4>
                <p className="project-description">
                This website allows people looking for jobs in Hout Bay  to host their profiles online so that potential employers and recruiters can easily find them.                </p>
                <div className="project-languages">
                    <img src="./images/icons/laravel.png" alt="Laravel"  />
                    <img src="./images/icons/php.png" alt="PHP"  />
                    <img src="./images/icons/mysql.png" alt="MySQL"  />
                    <img src="./images/icons/js.png" alt="JavaScript"  />
                    <img src="./images/icons/css.png" alt="CSS"  />
                    <img src="./images/icons/html.png" alt="HTML"  />
                </div>
                <div className="project-links">
                    <a href="https://houtbayonline.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="primary-button">
                       <span>View The Site</span>  
                    </a>
                    <a href="https://github.com/Johnnasimba/Houtbay" target="_blank" rel="noopener noreferrer" className="secondary-button">
                        <span>Source Code</span> 
                    </a>
                </div>
            </div>
            <div className="project-image">
                <img src="./images/projects-illustrations/hout-bay.png" alt="clothing store" />

            </div>
        </div>
    )
}

export default HoutBay;


