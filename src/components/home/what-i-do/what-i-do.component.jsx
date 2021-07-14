
import React from 'react'

import './what-i-do.styles.css';

const WhatIDo = () => {
    return (
        <div className="what-i-do-section">
            <div className="what-i-do-container">
                <h3>
                    WHAT I DO
                </h3>
                <div className="cards ">
                    <div className="card web-design">
                        <h4>UX Design</h4>
                    </div>
                    <div className="card front-end">
                        <h4>Front-End Development</h4>
                    </div>
                    <div className="card back-end">
                        <h4>Back-End Development</h4>
                    </div>
                
                </div>
                <button>Download CV</button>  
            </div>
        </div>
    )
}

export default WhatIDo;