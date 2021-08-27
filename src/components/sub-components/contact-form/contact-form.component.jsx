import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    width: 100%;
    height: 500px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;
const InputContainer = styled.div`
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
`;
const PrimaryInput = styled.input`
    width: 320px;
    height: 48px;
    margin-bottom: 20px;
    padding-left: 10px; 
    outline: none;
    border: none;
    border-radius: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    color: rgba(255, 255, 255, 0.67);
    background: #1B3447;
`;
const SubjectInput = styled.input`
    width: 690px;
    height: 48px;
    margin-bottom: 20px;
    padding-left: 10px; 
    outline: none;
    border: none;
    border-radius: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px
    color: rgba(255, 255, 255, 0.67);
    background: #1B3447;
`;
const MessageTextArea = styled.textarea`
    width: 690px;
    margin-bottom: 20px;
    padding-left: 10px;  
    padding-top: 10px;
    outline: none;
    border: none;
    border-radius: 5px
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    color: rgba(255, 255, 255, 0.67);
    background: #1B3447;
    resize:vertical;
`;
const Button = styled.button`
    width: 320px;
    height: 48px;
    border-radius: 5px;
    margin: 0 auto;
    background: #FB5B57;
    color: #fff;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
`;


const ContactForm = () => {
    return (
        <Form>
           <InputContainer>
               <PrimaryInput type="text" name="name" placeholder="Name"/>
               <PrimaryInput type="text" name="email" placeholder="Email" />
           </InputContainer>
           <SubjectInput type="text" name="subject" placeholder="Subject" />
           <MessageTextArea name="message" id="message" className="message" cols="30" rows="15" maxlength="30" placeholder="Message"></MessageTextArea>
           <Button type="submit">SEND MESSAGE</Button>
        </Form>

    )
}

export default ContactForm;