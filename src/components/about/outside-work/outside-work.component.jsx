import React from 'react';
import ImageSlider from './imade-slider/image-slider.component';




import './outside-work.styles.css';

const OutsideWorkSection = () => {
    return (
        <div className="outside-work-section">
           <h2 className="outside-work-section-title">OUT SIDE WORK</h2>
           <p className="outside-work-section-paragraph"> I love cycling and mountain hiking. It always feels great for me to travel around the city and enjoy the beauty of nature. I love these activities because they help me stay in shape as I spend most of my time sitting on a chair.  I also do participate in local community development activities. </p>

           <ImageSlider />

        </div>
    )
}


export default OutsideWorkSection;