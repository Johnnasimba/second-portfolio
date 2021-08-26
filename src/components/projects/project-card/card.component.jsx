import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
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

const Card = ({ title, imageUrl, description, languages, viewLive, sourceCode }) => {
    console.log(imageUrl)
    return (
        <Container>
            <Image src={imageUrl}></Image>
        </Container>
    )
}

export default Card;
