import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width : 100vw;
    height: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #1B3447;    
`;
const Container = styled.div`
    width: 1100px;
    height: 700px;
    margin: 0 auto;

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
const BargeContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const Figure = styled.figure``;
const Image = styled.img`
    width: 250px;
    height: 250px;
`;
const VerificationLink = styled.a`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-decoration-line: underline;

    color: #FB5B57; 
`;


const Accomplishments = () => {
    return (
        <Wrapper>
            <Container>
                    <Title>ACCOMPLISHMENTS</Title>
                    <BargeContainer>
                        <Figure>
                            <Image src="/images/google-ux-design-certificate.png" alt="Google UX Design Certificate" />
                        </Figure>
                        <VerificationLink href="https://www.credly.com/badges/5262b6ee-b3b8-4232-90ce-359a02451242/public_url" target="_blank" rel="noopener noreferrer">Verify</VerificationLink>
                    </BargeContainer>
            </Container>
        </Wrapper>
    )
}

export default Accomplishments;
