import React, {useState, useEffect} from 'react';
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
    max-width: 1150px;
    margin: 0;
    padding: 0;
    padding-left: 19px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
`;
const Spinner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`;


const Projects = () => {
    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        getData();
      }, []);
    
      async function getData() {
        const response = await fetch('/projects.json', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
            });
        const data = await response.json();
        setProjectData(data);
      }

      return (
        <Wrapper>
            <Title>PROJECTS</Title>
             <ProjectsContainer>
                {
                   projectData ? projectData.map((item) => (
                        <Card key={item.id}></Card>
                    )) : (
                        <Spinner>
                            Loading projects ...
                        </Spinner>
                    )
                }

             </ProjectsContainer>
        </Wrapper>
    )
}


export default Projects;

