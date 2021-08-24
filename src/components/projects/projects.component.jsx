import React from 'react';
import styled from 'styled-components';
import Card from './project-card/card.component';


const Wrapper = styled.div`
    width: 100vw;
    min-height: 100vw;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    background: #1B3447;
`;
const Title = styled.h2`
    margin-top:  130px;
    margin-bottom: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 56px;
    color: #FFFFFF;
`;
const ProjectsContainer = styled.div`
    width: 1150px;
    margin: 0;
    padding: 0;
    padding-left: 19px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    // background: white;
`;


const Projects = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <Wrapper>
            <Title>PROJECTS</Title>
             <ProjectsContainer>
                {
                    data.map((item, index) => (
                        <Card key={index}></Card>
                    ))
                }

             </ProjectsContainer>
        </Wrapper>
    )
}


export default Projects;

