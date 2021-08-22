import React from 'react';
import styled from 'styled-components';

import ClothingStore from './clothing-store/clothing-store.component';
import HoutBay from './houtbay-job-seekers/houtbay.component';
import InfinityScroll from './infinity-scroll/infinity-scroll.component';
import DarkMode from './light-and-dark-mode/dark-mode.component';

const Wrapper = styled.div`
    width: 100vw;
    height: 2000px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    background: #1B3447;
`;
const Title = styled.h2`
    margin-top:  130px;
    margin-bottom: 100px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 56px;
    color: #FFFFFF;
`;
const ProjectTitle = styled.div`
    width: 1000px;
    height: 400px;
    /* background: #000; */
    margin: 2px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
`;

const Projects = () => {
    return (
        <Wrapper>
            <Title>PROJECTS</Title>
            <ProjectTitle>
                <ClothingStore />
                <HoutBay />
                <DarkMode />
                <InfinityScroll />
            </ProjectTitle>
        </Wrapper>
    )
}


export default Projects;

