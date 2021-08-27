import React from 'react';
import styled from 'styled-components';
import ContactForm from '../sub-components/contact-form/contact-form.component';


const Wrapper=  styled.div`
    width: 100vw;
    min-height: 100vh;
    background: #06273D;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 100px
`;
const Title = styled.h2`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 42px;
    margin:0;
    color: #FFFFFF;
`;
const Description = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-size: 18px;
    line-height: 40px;
    margin: 0;
    color: #FFFFFF;
`;

const Contact = () => {
    return (
        <Wrapper>
            <Container>
                <Title>CONTACT</Title>
                <Description>I would be happy to hear from you for an interview and a possible job offer.</Description>
                <ContactForm></ContactForm>
            </Container>
        </Wrapper>
    )
}

export default Contact;