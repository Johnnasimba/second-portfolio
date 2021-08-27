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
    margin-top: 130px
`;

const Contact = () => {
    return (
        <Wrapper>
            <Container>
                contact page
                <ContactForm></ContactForm>
            </Container>
        </Wrapper>
    )
}

export default Contact;