import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 1100px;
    height: 700px;
    margin-bottom: 200px;
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
`;
const IconCategory = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    width: 45%;
    height: 100%;
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
           <Title>SKILLS</Title>
               
           <IconsContainer>
               {/* front end icon section */}
                <IconCategory>
                    <CategoryTitle>FRONT-END</CategoryTitle>
                    <Icons>
                      <Icon>
                          <IconName>React</IconName>
                          <IconImage src="./images/icons/react.png" alt="React" />
                      </Icon>
                      <Icon>
                          <IconName>Redux</IconName>
                          <IconImage src="./images/icons/redux.png" alt="Redux" />
                      </Icon>
                      <Icon>
                          <IconName>GraphQL</IconName>
                          <IconImage src="./images/icons/graphql.png" alt="GraphQL" />
                      </Icon>
                      <Icon>
                          <IconName>AngularJS</IconName>
                          <IconImage src="./images/icons/angularjs.png" alt="AngularJS" />
                      </Icon>
                      
                      <Icon>
                          <IconName>Bootstrap</IconName>
                          <IconImage src="./images/icons/bootstrap.png" alt="Bootstrap" />
                      </Icon>
                      <Icon>
                          <IconName>Sass</IconName>
                          <IconImage src="./images/icons/sass.png" alt="SASS" />
                      </Icon>
                      <Icon>
                          <IconName>Materialise</IconName>
                          <IconImage src="./images/icons/materialize.png" alt="Materialise" />
                      </Icon>
                      <Icon>
                          <IconName>JQuery</IconName>
                          <IconImage src="./images/icons/jquery.png" alt="JQuery" />
                      </Icon>
                      <Icon>
                          <IconName>JavaScript</IconName>
                          <IconImage src="./images/icons/javascript.png" alt="JavaScript" />
                      </Icon>
                      <Icon>
                          <IconName>TypeScript</IconName>
                          <IconImage src="./images/icons/typescript.png" alt="TypeScript" />
                      </Icon>
                      <Icon>
                          <IconName>HTML</IconName>
                          <IconImage src="./images/icons/html.png" alt="HTML" />
                      </Icon>
                      <Icon>
                          <IconName>CSS</IconName>
                          <IconImage src="./images/icons/css.png" alt="CSS" />
                      </Icon> 
                    </Icons>
                </IconCategory>

                {/* back end icon section */}
                <IconCategory>
                    <CategoryTitle>FRONT-END</CategoryTitle>
                    <Icons>
                      <Icon>
                          <IconName>NodeJS</IconName>
                          <IconImage src="./images/icons/nodejs.png" alt="NodeJS" />
                      </Icon>
                      <Icon>
                          <IconName>Python</IconName>
                          <IconImage src="./images/icons/python.png" alt="Python" />
                      </Icon>
                      <Icon>
                          <IconName>Django</IconName>
                          <IconImage src="./images/icons/django.png" alt="Django" />
                      </Icon>
                      <Icon>
                          <IconName>PHP</IconName>
                          <IconImage src="./images/icons/php.png" alt="PHP" />
                      </Icon>
                      <Icon>
                          <IconName>Laravel</IconName>
                          <IconImage src="./images/icons/laravel.png" alt="Laravel" />
                      </Icon>
                      <Icon>
                          <IconName>MongoDB</IconName>
                          <IconImage src="./images/icons/mongodb.png" alt="MongoDB" />
                      </Icon>
                      <Icon>
                          <IconName>MySQL</IconName>
                          <IconImage src="./images/icons/mysql.png" alt="MySQL" />
                      </Icon>
                      <Icon>
                          <IconName>Postgres</IconName>
                          <IconImage src="./images/icons/postgres.png" alt="Postgres" />
                      </Icon>
                      <Icon>
                          <IconName>Stripe</IconName>
                          <IconImage src="./images/icons/stripe.png" alt="Stripe" />
                      </Icon>
                      <Icon>
                          <IconName>Firebase</IconName>
                          <IconImage src="./images/icons/firebase.png" alt="Firebase" />
                      </Icon>
                      <Icon>
                          <IconName>Heroku</IconName>
                          <IconImage src="./images/icons/heroku.png" alt="Heroku" />
                      </Icon>
                      <Icon>
                          <IconName>AWS</IconName>
                          <IconImage src="./images/icons/aws.png" alt="AWS" />
                      </Icon>
                      
                    </Icons>
                </IconCategory>
           </IconsContainer>

        </Wrapper>
    )
}

export default SkillsSection;