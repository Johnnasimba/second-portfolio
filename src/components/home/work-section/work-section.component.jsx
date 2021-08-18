import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    width: 100vw;
    height: 963px;
    background: #1B3447;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
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
    justify-content: center;
`;
const ProjectDescription = styled.div`
    width: 548px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    margin-right: 40px;
`;
const Paragraph = styled.p`
    width: 350px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 40px;
    margin-top: 0;
    margin-right: 0;

    color: #FFFFFF;
`;
const Button = styled.button`
    width: 240px;
    height: 62px;
    margin-right: 105px;
    margin-top: 27px;
    background: #1B3447;
    border: 4px solid #FB5B57;
    box-sizing: border-box;
    border-radius: 10px;    
`;
const NavLink = styled(Link)`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 42px;
    color: #FB5B57;
    text-decoration: none;
`;
const Figure = styled.figure`
    width: 548px;
    height: 367px;
`;
const Image = styled.img`
    height: 340px;
`;




const WorkSection = () => {
    return (
        <Wrapper>
           <Title>PROJECTS</Title>
           <Container>
               <ProjectDescription>
                   <Paragraph>I am always developing applications while constantly learning. I strongly believe in practice makes perfect. Check out some of the projects I have worked on. </Paragraph>
                   <Button>
                       <NavLink>View Projects</NavLink>                       
                   </Button>
               </ProjectDescription>
               <Figure>
                   <Image src="./images/work-image.png" alt="work environment" />
               </Figure>
           </Container>
        </Wrapper>
    )
}

export default WorkSection;