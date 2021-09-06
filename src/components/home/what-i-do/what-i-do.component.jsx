import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100vw;
    height: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #06273D;
    padding: 0;
    margin: 0;
    @media screen and (max-width: 1100px){
        height: 1500px;
    }
    @media screen and (max-width: 800px){
        height: 950px;
    }
    @media screen and (max-width: 700px){
        height: 1300px;
    }
`;
const Container = styled.div`
    width: 1100px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 1100px){
        width: 100vw;
        height: 2000px;
        margin: 0;
        padding: 0;
        margin-top: 50px;
    }
`;
const Title = styled.h2`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 42px;
    margin-top: 200px;
    color: #FFFFFF;
    @media screen and (max-width: 800px){
        margin-top: 20px;
    }
`;
const Cards = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    @media screen and (max-width: 1100px){
        justify-content: center;
    }
    @media screen and (max-width: 600px){
        padding: 20px;
        &:nth-child(4) {
            display: none;
        };
    }
`;
const Card = styled.div`
    width: 300px;
    height: 320px;
    margin-right: 40px;
    display: flex;
    align-items: center;
    justify-content: center; 
    @media screen and (max-width: 1100px){
        margin: 20px;

    } 
 
    @media screen and (max-width: 600px){
        margin: 20px;
        &:nth-child(4) {
            display: none;
        };
    }
    @media screen and (max-width: 450px){
        width: 90vw;
        height: 300px;
    }
      
`;
const WebDesignCard = styled(Card)`
    background: linear-gradient(0deg, rgba(6, 39, 61, 0.4), rgba(6, 39, 61, 0.4)), url(${process.env.PUBLIC_URL + "/images/web-design.jpg"});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
`;
const FrontEndCard = styled(Card)`
    background: linear-gradient(0deg, rgba(27, 52, 71, 0.38), rgba(27, 52, 71, 0.38)), url(${process.env.PUBLIC_URL + "/images/front-end-development.jpg"});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
`;
const BackEndCard = styled(Card)`
    background: linear-gradient(0deg, rgba(6, 39, 61, 0.69), rgba(6, 39, 61, 0.69)), url(${process.env.PUBLIC_URL + "/images//back-end-development.jpg"});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const InvisibleCard = styled(Card)`
    @media screen and (max-width: 700px){
        display: none;
    }
`;

const CardTitle = styled.h4`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    @media screen and (max-width: 350px){
        font-size: 18px;
    }
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
                    <InvisibleCard></InvisibleCard>           
                </Cards>
            </Container>
        </Wrapper>
    )
}

export default WhatIDo;