import React from 'react';
import ImageSlider from './image-slider/image-slider.component';
import styled from 'styled-components';

import image1 from '../../../assets/slide-images/image1.jpg';
import image2 from '../../../assets/slide-images/image2.jpg';
import image3 from '../../../assets/slide-images/image3.jpg';
import image4 from '../../../assets/slide-images/image4.jpg';

const Wrapper =  styled.div`
    width: 1100px;
    height: 1000px;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 200px;
`;
const Title = styled.h2`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;

    color: #FFFFFF;
`;
const Paragraph = styled.p`
    width: 700px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 200px;
`;
const OutsideWorkSection = () => {
    return (
        <Wrapper>
           <Title>OUT SIDE WORK</Title>
           <Paragraph className="outside-work-section-paragraph"> I love cycling and mountain hiking. It always feels great for me to travel around the city and enjoy the beauty of nature. I love these activities because they help me stay in shape as I spend most of my time sitting on a chair.  I also do participate in local community development activities. </Paragraph>
           <ImageSlider images={[image1, image2, image3, image4 ]} />
        </Wrapper>
    )
}


export default OutsideWorkSection;