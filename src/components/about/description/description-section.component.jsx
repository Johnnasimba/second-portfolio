import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 1100px;
    height: 650px;
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    @media screen and (max-width: 1200px){
        width: 100vw;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;
const Description = styled.div`
    width: 550px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
`;

const Title = styled.h5``;
const Paragraph = styled.p``;

const Figure = styled.figure`
    width: 400px;
    height: 600px;
    background: #fff;
`;
const AboutImage = styled.img`
    height: 600px;
`;


const DescriptionSection = () => {
    return (
        <Container>
           <Description>
               <Title>Hello 👋</Title>
               <Paragraph>My name is John Nasimba. I am a passionate full-stack web developer living in Cape Town, South Africa. I was born in Malawi in 1997. </Paragraph>
               <Paragraph>I have been developing web applications since 2019. I teach myself new skills every day by taking courses online to advance my knowledge in the field of programming. I also develop complex web applications as I am a fun believer in practice makes perfect.</Paragraph>
               <Paragraph>I went to Lilongwe University Of Agriculture and Natural Resources (LUANAR) where I studied bachelor's degree in Agriculture. While growing up, my passion was to be a software engineer that’s why I switched to software development. </Paragraph>
               <Paragraph>My friends would describe me as a fast learner, hard-working, passionate, motivated, reliable, and highly productive person.</Paragraph>
               <Paragraph>My future goal is to be a reliable and skilled software engineer trusted by clients from all over the world.  </Paragraph>
               <Paragraph>You can check out my skills below, and don't forget to contact me for an interview and a possible job offer. </Paragraph>
           </Description>
           <Figure>
               <AboutImage src={process.env.PUBLIC_URL + "/images/John-nasimba(about-me).jpg"} alt="John Nasimba" className="description-section-image" />
           </Figure>
        </Container>
    )
}


export default DescriptionSection;