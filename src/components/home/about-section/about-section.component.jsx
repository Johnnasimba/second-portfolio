
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    width: 100vw;
    height: 850px;
    background: #06273D;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.h2`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 42px;
    margin-top: 200px;

    color: #FFFFFF;
`;
const Container = styled.div`
    width: 1440px;
    height: 600px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
const ImageContainer = styled.figure`
    width:300px;
    // background: white;
`;
const Image = styled.img`
    height: 500px;
`;
const Description = styled.div`
    width: 300px;
    height: 500px;
    margin: 0;
    padding: 0;
    // background: red;
`;
const Paragraph = styled.p`
    width: 350px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 40px;
    margin: 0;
    color: #FFFFFF;
`;
const Button = styled.button`
    width: 240px;
    height: 62px;
    margin-top: 50px;
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
           <Title>ABOUT</Title>
           <Container>
               <ImageContainer>
                    <Image src="/images/about-image.png" alt="John Nasimba"/>
               </ImageContainer>
               <Description>
                   <Paragraph>I am a professional web developer with a great passion for learning. I love developing websites from scratch starting with designing, front-end development, back-end development, APIs development, web hosting and many more.</Paragraph>
                   <Button > <ButtonLink ButtonLink to='/about'>About Me</ButtonLink> </Button>
               </Description>
           </Container>
        </Wrapper>
    )
}

export default AboutSection;

