import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: url("/images/cape-town-city.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    margin-top: 130px;
`;
const ProfileImageContainer = styled.div`
    width: 303.28px;
    height: 299px;
`;
const ProfileImage = styled.img`
    border-radius: 50%;
`;
const Name = styled.h3`
    height: 40px; 
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    margin-top: 100px;
    margin-bottom: 0;       
    color: #FB5B57;
    @media screen and (max-width: 600px){
        font-size: 30px;
    }
`;
const Title = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 84px;
    margin-top: 0;
    color: #FFFFFF; 
    @media screen and (max-width: 800px) {
        font-size: 50px;
    }
    @media screen and (max-width: 800px) {
        font-size: 40px;
    }
    @media screen and (max-width: 500px) {
        font-size: 35px;
    }
    @media screen and (max-width: 400px) {
        font-size: 30px;
        line-height: 30px;
    }
`;
const LocationContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 20px;
    bottom: 0;
    color: #FFFFFF;
`;



const LandingSection = () => {
    return (
        <Wrapper>
            <Container>
                <ProfileImageContainer>
                    <ProfileImage src="/images/profile-image.jpg" alt="John Nasimba" />
                </ProfileImageContainer>
                <Name>John Nasimba</Name>
                <Title>Full-Stack Web Developer</Title>
                <LocationContainer>
                    <i className="fas fa-map-marker-alt" style={{color: '#FB5B57'}}></i>
                    <p>Location: Cape Town, South Africa</p>
                </LocationContainer>
            </Container>               
        </Wrapper>
    )
}

export default LandingSection;