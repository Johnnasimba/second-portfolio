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
`;
const Title = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 84px;
    margin-top: 0;

    color: #FFFFFF; 
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