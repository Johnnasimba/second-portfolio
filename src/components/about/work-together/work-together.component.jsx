import React from 'react';
import  { Link } from 'react-router-dom'
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 1100px;
    height: 500px;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 150px;
    @media screen and (max-width: 1100px){
        width: 100vw;
        height: 300px;
    }
`;
const Question = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: rgba(255, 255, 255, 0.56);
    @media screen and (max-width: 700px){
        font-size: 12px;
        line-height: 0;
    }

`;

const StyledNavLink = styled(Link)`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 75px;
    text-decoration: underline;
    color: #FFFFFF;
    margin-top: 20px;
    &:hover {
        border-bottom: 4px solid white;
    }
    @media screen and (max-width: 700px){
        font-size: 40px;
        line-height: 40px;
    }
    @media screen and (max-width: 700px){
        font-size: 40px;
        line-height: 40px;
    }
    @media screen and (max-width: 450px){
        font-size: 30px;
        line-height: 40px;
    }
    @media screen and (max-width: 350px){
        font-size: 20px;
        line-height: 40px;
    }
`;
const WorkTogetherSection = () => {
    return (
        <Wrapper>
            <Question>NEED A FULL STACK DEVELOPER ?</Question>
            <StyledNavLink to="/contact">let’s work together  <i className="fas fa-arrow-right"></i></StyledNavLink>
        </Wrapper>
    )
}


export default WorkTogetherSection;