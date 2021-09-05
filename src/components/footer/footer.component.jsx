import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
    width: 100vw;
    height: 350px;
    background: #1B3447;
`;
const Container = styled.div`
    width: 270px; 
    height: 210;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 400px){
        width: 100vw;
    }
`;
const Title = styled.h5`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;
    margin-bottom: 15px;
    color: #FFFFFF;
    @media screen and (max-width: 400px){
        font-size: 30px;
    }
`;
const Quote = styled.p`
    padding: 0;
    margin: 2px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    text-align: center;

    color: #FFFFFF;
`;
const SocialMediaIcons = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    background: #000;
    @media screen and (max-width: 300px){
        justify-content: center;
    }
`;
const SocialMediaLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height:40px;
    margin-right: 10px;
 
    color: #fff;
    background: #06273D;
    list-style: none;  
    text-decoration: none;
    border-radius: 50%;
    border: 1px solid #FB5B57;
`;
const ClosingRemarks = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 0;
`;
const CopyRight = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;

    color: #FFFFFF
`;
const OwnerName = styled.span`
    font-weight: bold;
`;


const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <Title>JOHN NASIMBA</Title>
                <Quote>A program is never less than 90% complete</Quote>
                <Quote>and</Quote>
                <Quote>never more than 95% complete</Quote>
                <SocialMediaIcons>
                    {/* email */}
                    <SocialMediaLink href="mailto:nasimba4john@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i className="far fa-envelope fa-lg"></i>
                    </SocialMediaLink>
                    {/*linkedIn*/}
                    <SocialMediaLink href="https://www.linkedin.com/in/john-nasimba/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in fa-lg"></i>
                    </SocialMediaLink>
                    {/* facebook */}
                    <SocialMediaLink href="https://www.facebook.com/john.nasimba.7" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook fa-lg"></i>
                    </SocialMediaLink>
                    {/* whatsApp */}
                    <SocialMediaLink href="https://wa.me/+27780387591" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp fa-lg"></i>
                    </SocialMediaLink>
                    {/* Github */}
                    <SocialMediaLink href="https://github.com/Johnnasimba/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github fa-lg"></i>
                    </SocialMediaLink>
                </SocialMediaIcons>
                <ClosingRemarks>
                    <i className="far fa-copyright" style={{marginRight:'10px', color: '#fff'}}></i>
                    <CopyRight>2020-21 <OwnerName className="footer-last-name">John Nasimba</OwnerName> | All Rights  Reserved</CopyRight>
                </ClosingRemarks>
            </Container>
        </Wrapper>
    )
}

export default Footer;
