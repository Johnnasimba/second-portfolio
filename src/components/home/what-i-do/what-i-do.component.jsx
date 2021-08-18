
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100vw;
    height: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #06273D;
`;
const Container = styled.div`
    width: 1100px;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
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
const Cards = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
const Card = styled.div`
    width: 300px;
    height: 320px;
    margin-right: 40px;
    display: flex;
    align-items: center;
    justify-content: center;    
`;
const WebDesignCard = styled(Card)`
    background: linear-gradient(0deg, rgba(6, 39, 61, 0.4), rgba(6, 39, 61, 0.4)), url("/images/web-design.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;
const FrontEndCard = styled(Card)`
    background: linear-gradient(0deg, rgba(27, 52, 71, 0.38), rgba(27, 52, 71, 0.38)), url("/images/front-end-development.jpg");
    box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;
const BackEndCard = styled(Card)`
    background: linear-gradient(0deg, rgba(6, 39, 61, 0.69), rgba(6, 39, 61, 0.69)), url("/images//back-end-development.jpg");
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;
const CardTitle = styled.h4`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
`;
const Button = styled.button`
    width: 219px;
    height: 66px;
    margin-top: 200px;
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
    line-height: 28px;
    color: #FB5B57;
    text-decoration: none;
`;

const WhatIDo = () => {
    return (
        <Wrapper>
            <Container>
                <Title> WHAT I DO  </Title>
                <Cards>
                    <WebDesignCard>
                        <CardTitle>UX Design</CardTitle>
                    </WebDesignCard>
                    <FrontEndCard>
                        <CardTitle>Front-End Development</CardTitle>
                    </FrontEndCard>
                    <BackEndCard>
                        <CardTitle>Back-End Development</CardTitle>
                    </BackEndCard>
                
                </Cards>
                <Button> 
                    <NavLink to='/'>Download CV</NavLink>
                </Button>  
            </Container>
        </Wrapper>
    )
}

export default WhatIDo;