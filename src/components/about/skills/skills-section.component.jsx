import React from 'react';
import styled from 'styled-components';

import FrontendIcons from './frontend-icons';
import BackendIcons from './backend-icons';

const Wrapper = styled.div`
    width: 1100px;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 200px;
    @media screen and (max-width: 1200px){
        width: 100vw;
        height: auto;
        justify-content: flex-start;
        align-items: flex-start;
        margin-top: 50px;
    }
    @media screen and (max-width: 300px){
        margin-top: 100px;   
    }
   
    @media screen and (max-width: 300px){
        margin-top: 100px;   
    }
    @media screen and (max-width: 250px){
        margin-top: 200px;   
    }
    @media screen and (max-width: 220px){
        margin-top: 300px;   
    }
    @media screen and (max-width: 200px){
        margin-top: 400px;   
    }
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    //background: red;
    margin-left: 20px;
    @media screen and (max-width: 300px){
        margin-left: 0;
    }

`;
const Title = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 42px;
    margin-top: 200px;

    color: #FFFFFF;
`;
const IconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;

    width: 1100px;
    height: 400px;
    background: #213F56;
    border-radius: 10px;
    @media screen and (max-width: 1200px){
        width: 80vw;
        height: 600px;
        
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    @media screen and (max-width: 900px){
        height: 800px;
    }
    @media screen and (max-width: 600px){
        height: 1000px;
    }
    @media screen and (max-width: 500px) {
        width: 90vw;
        height: 1200px;
    }
    @media screen and (max-width: 400px) {
        width: 90vw;
        height: 1400px;
    }
    @media screen and (max-width: 300px) {
        width: 100vw;
        height: auto;
    }
`;
const IconCategory = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    @media screen and (max-width: 1200px){
        width: 90%;
    }
    @media screen and (max-width: 500px){
        width: 100%;
    }

`;
const CategoryTitle = styled.h4`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    color: #FFFFFF;

`;
const Icons = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    width: 100%;
`;
const Icon = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;

    width: 95px;
    height: 94px;
    margin: 0 10px 10px 0px;
    border-radius: 5px;
    &:hover{
        background: #1B3447;
    }

`;
const IconName = styled.p`
margin: 0;
margin-bottom: 5px;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 14px;
color: #FFFFFF;
`;
const IconImage = styled.img`
    height: 50px;
    width: auto;
   
`;



const SkillsSection = () => {
    return (
        <Wrapper>
            <Container>
           <Title>SKILLS</Title>
               
           <IconsContainer>
                <IconCategory>
                    <CategoryTitle>FRONT-END</CategoryTitle>
                    <Icons> 
                        {
                            FrontendIcons.map(({id, title, url}) => (
                                <Icon key={id}>
                                    <IconName> {title} </IconName>
                                    <IconImage src={`${process.env.PUBLIC_URL}/images/icons/${url}`} alt={title} />
                                </Icon>
                            ))
                        }                     
                    </Icons>
                </IconCategory>
                <IconCategory>
                    <CategoryTitle>FRONT-END</CategoryTitle>
                    <Icons>
                        {
                            BackendIcons.map(({id, title, url})=> (
                                <Icon key={id}>
                                    <IconName> {title} </IconName>
                                    <IconImage src={`${process.env.PUBLIC_URL}/images/icons/${url}`} alt={title} />
                                </Icon>    
                            ))
                        }
                                       
                    </Icons>
                </IconCategory>
           </IconsContainer>
           </Container>
        </Wrapper>
    )
}

export default SkillsSection;