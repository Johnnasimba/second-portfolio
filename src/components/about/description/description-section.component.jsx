import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 1100px;
    height: 650px;
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    @media screen and (max-width: 1200px){
        width: 100vw;
        height: 1300px;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
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
    @media screen and (max-width: 1200px) {
        width: 80vw;
        margin: 0 0 0 20px;
    }
    @media screen and (max-width: 800px) {
        width: 90vw;
    }

`;

const Title = styled.h5``;
const Paragraph = styled.p``;

const Figure = styled.div`
    width: 400px;
    height: 600px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1200px){
        width: 550px;
        margin: 80px 0 20px 20px;
    }
    @media screen and (max-width: 800px){
        width: 90vw;
        margin-top: 200px;
    }
    @media screen and (max-width: 750px){
        margin-top: 180px;
    }
    @media screen and (max-width: 650px){
        margin-top: 130px;
    }
    @media screen and (max-width: 650px){
        margin-top: 130px;
    }
    @media screen and (max-width: 550px){
        margin-top: 50px;
    }
`;
const AboutImage = styled.img`
    height: 600px;
    @media screen and (max-width: 1200px) {
        width: 100%;
        height: auto;
    }
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