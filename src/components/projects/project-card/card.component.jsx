import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 348px;
    height: 460px;
    margin: 15px;
    background: #06273D;
    border-radius: 15px;

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




const Card = ({ title, imageUrl, description, languages, viewLive, sourceCode }) => {
    console.log(imageUrl)
    return (
        <Container>
            <Image src={imageUrl}></Image>
            <Title> { title } </Title>
            <Description> { description } </Description>
            <Languages>
                {
                    languages.map((iconName, index) => (
                        <Icon key={index} src={"/images/icons/" + iconName}></Icon>
                    ))
                }
               
            </Languages>
        </Container>
    )
}

export default Card;
