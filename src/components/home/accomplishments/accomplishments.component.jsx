import React from 'react';
import styled from 'styled-components';
import BargeItems from './barge-items';

const Wrapper = styled.div`
    width : 100vw;
    height: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #1B3447;  
    @media screen and (max-width: 800px){
        height: 700px;
    }  
    @media screen and (max-width: 600px){
        height: 800px;
    }  
    @media screen and (max-width: 400px){
        height: 700px;
    }  
`;
const Container = styled.div`
    width: 1100px;
    height: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1100px) {
        width: 100vw;
    }
    @media screen and (max-width: 800px) {
        height: 500px;
    }
  
`;
const Title = styled.h2`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 42px;
    color: #FFFFFF;
    @media screen and (max-width: 800px) {
        margin-top: 100px;
    }
    @media screen and (max-width: 400px) {
        font-size: 20px;
    }
`;
const BargeContainer = styled.div`
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content:center;
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`;
const Barge = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;
const Image = styled.img`
    height: 250px; 
    @media screen and (max-width: 400px){
        height: 200px;
    }   
`;
const Verify = styled.a`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-decoration-line: underline;
    cursor: pointer;
    color: #FB5B57; 
`;


const Accomplishments = () => {
    return (
        <Wrapper>
            <Container>
                    <Title>ACCOMPLISHMENTS</Title>
                    <BargeContainer>
                        {
                            BargeItems.map(({id, title, imageUrl, verificationLink}) =>(
                                <Barge key={id}>
                                    <Image src={`${process.env.PUBLIC_URL}/images/achievement-barge/${imageUrl}`}  alt={title} />
                                    <Verify href={verificationLink} target="_blank" rel="noopener noreferrer">Verify</Verify>
                                </Barge>
                            ))
                        }
                    </BargeContainer>
            </Container>
        </Wrapper>
    )
}

export default Accomplishments;
