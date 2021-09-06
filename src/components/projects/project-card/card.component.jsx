import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 348px;
    height: 460px;
    margin: 15px;
    background: #06273D;
    border-radius: 15px;

`;
const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
`;
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;
const Image = styled.img`
    width: 100%;
    height: 50%;
    padding: 0;
    margin: 0;
    border-radius: 15px 15px 0px 0px;
`;
const Title = styled.h5`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    margin: 0;
    padding-top: 20px;
    text-transform: uppercase;
    color: #FFFFFF;
`;
const Description = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    padding: 0;
    margin: 10px 5px 10px 5px;
    text-align: center;
    line-height: 18px;
    color: #FFFFFF;
`;
const Languages = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 100%;
    margin: 0;
    padding: 0;
`;
const Icon = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 5px;
`;
const PrimaryButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 127.74px;
    height: 31.98px;
    margin: 15px;
    background: #FB5B57;
    border-radius: 5px;

`;
const PrimaryButtonLink = styled.a`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-decoration: none;

    color: #FFFFFF;    
`;
const SecondaryButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 127.74px;
    height: 28.98px;
    margin: 15px;
    background: #1B3447;
    border: 2px solid #FB5B57;
    border-radius: 5px;
`;
const SecondaryButtonLink = styled.a`
    width: 79.71px;
    height: 21.32px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-decoration: none;

    color: #FFFFFF;
`;



const Card = ({ title, imageUrl, description, languages, viewLive, sourceCode }) => {
    return (
        <Wrapper>
            <ProjectContainer>
                <Image src={imageUrl}></Image>
                <Title> { title } </Title>
                <Description> { description } </Description>
                <Languages>
                    {
                        languages.map((iconName, index) => (
                            <Icon key={index} src={process.env.PUBLIC_URL + "/images/icons/" + iconName}></Icon>
                        ))
                    }
                
                </Languages>
            </ProjectContainer>
            <ButtonContainer>
                <PrimaryButtonContainer>
                    <PrimaryButtonLink href={viewLive} target="_blank" rel="noopener noreferrer">View Live</PrimaryButtonLink>
                </PrimaryButtonContainer>
                <SecondaryButtonContainer>
                    <SecondaryButtonLink href={sourceCode} target="_blank" rel="noopener noreferrer">Source Code</SecondaryButtonLink>
                </SecondaryButtonContainer>
            </ButtonContainer>
        </Wrapper>
    )
}

export default Card;
