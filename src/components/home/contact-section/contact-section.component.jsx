import React from 'react';
import styled from 'styled-components';

import ContactFrom from '../../sub-components/contact-form/contact-form.component';

const Wrapper =  styled.div`
    width: 100vw;
    height: 1000px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: #06273D;
`;
const Container = styled.div`
    width: 1100px;
    height: 600px;
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
    color: #FFFFFF;
`;
const FormContainer = styled.div`
    width: 700px;
    height: 400px;
`;
const ContactSection =() => {
    return (
        <Wrapper> 
            <Container>
                <Title>CONTACT</Title>
                <FormContainer>
                    <ContactFrom />
                </FormContainer>
            </Container>
        </Wrapper>
    )
}

export default ContactSection;