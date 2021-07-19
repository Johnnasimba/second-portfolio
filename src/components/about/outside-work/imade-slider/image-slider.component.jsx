import React from 'react';

import './image-slider';
import './image-slider.styles.css';

const ImageSlider = () => {
    return (
        <div className="image-slider">
           <div className="wrapper">

                <div className="prev-btn"><i className="fas fa-chevron-left"></i></div>

                <div className="slides-container" >
                    <div className="slide-image">
                        <img src="./images/image-slider/school-life.jpg" alt="At school with my friends" />
                    </div>

                    <div className="slide-image">
                        <img src="./images/image-slider/John-nasimba.jpg" alt="Table mountain hiking" />
                    </div>

                    <div className="slide-image">
                        <img src="./Images/image-slider/Cycling.jpg"  alt="Cycling around Camps bay" />
                    </div>
                    <div className="slide-image">
                        <img src="./Images/image-slider/me-and-my-father.jpg"  alt="" />
                    </div>
                   
                </div>

                <div className="next-btn"><i className="fas fa-chevron-right"></i></div>

            </div>

            <div className="navigation-dots">
                
            </div>   
        </div>
    )
}

export default ImageSlider;
