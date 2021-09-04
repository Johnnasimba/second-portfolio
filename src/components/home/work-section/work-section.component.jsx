import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    width: 100vw;
    height: 900px;
    background: #1B3447;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    background-image: url("/images/projects-image.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 1100px;
    height: 600px; 
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1100px) {
        width: 100vw;
    }
`;
const ProjectDescription = styled.div`
    width: 500px;
    height: 300px;    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 0 0 50px;
    padding: 0;
`;
const Paragraph = styled.p`
    background: rgba(27, 52, 71, 0.7);
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 30px;
    border-radius: 10px;     
    margin: 0;
    padding: 15px;
    color: #FFFFFF;
`;
const Button = styled.button`
    width: 240px;
    height: 62px;
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





const WorkSection = () => {
    return (
        <Wrapper>
           <Container>
               <ProjectDescription>
                   <Paragraph>I am always developing applications while constantly learning. I strongly believe in practice makes perfect. Check out some of the projects I have worked on. </Paragraph>
                   <Button>
                       <NavLink to="/projects">View Projects</NavLink>                       
                   </Button>
               </ProjectDescription>
           </Container>
        </Wrapper>
    )
}

export default WorkSection;