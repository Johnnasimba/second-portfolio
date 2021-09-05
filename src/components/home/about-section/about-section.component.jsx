
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    width: 100vw;
    height: 900px;
    background: #06273D;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1100px){
        height: 1000px;
    }
`;
const Container = styled.div`
    width: 1100px;
    height: 700px;
    margin-top: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    @media screen and (max-width: 1100px){
        width: 100vw;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
`;
const ImageContainer = styled.figure`
    width:400px;
    height: auto;
`;
const Image = styled.img`
    height: 700px;
    margin-bottom: 0px;
    @media screen and (max-width: 800px){
        height: 500px;
    }
`;
const Description = styled.div`
    width: 500px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 0 0 50px;
    padding: 20px;
    @media screen and (max-width: 1100px){
        margin-top: -100px;
    }
    @media screen and (max-width: 500px){
        width: 100%;
        margin: 20px;
    }
`;
const Paragraph = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 30px;
    margin: 0 20px;
    color: #FFFFFF;
`;
const Button = styled.button`
    width: 240px;
    height: 62px;
    margin-top: 10px;
    margin-bottom: 0px;
    margin-left: 0px;

    background: #F94040;
    border-radius: 10px;

  
`;
const  ButtonLink = styled(Link)`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 42px;
    text-decoration: none;

    color: #FFFFFF;
`;


const AboutSection = () => {
    return (
        <Wrapper>
           <Container>
               <ImageContainer>
                    <Image src="/images/about-image.png" alt="John Nasimba"/>
               </ImageContainer>
               <Description>
                   <Paragraph>I am a professional web developer with a great passion for learning. I love developing websites and mobile applications from scratch starting with designing, front-end development, back-end development, APIs development, web hosting and many more.</Paragraph>
                   <Button > <ButtonLink ButtonLink to='/about'>About Me</ButtonLink> </Button>
               </Description>
           </Container>
        </Wrapper>
    )
}

export default AboutSection;

