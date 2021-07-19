import React from 'react';


import './skills-section.styles.css';

const SkillsSection = () => {
    return (
        <div className="skills-section">
           <h2 className="skills-section-title">SKILLS</h2>
               
           <div className="skills-section-icons-container">
               {/* front end icon container */}
                <div className="icon-category front-end">
                    <h4 className="category-title">FRONT-END</h4>
                    <div className="skills-section-icons">
                      {/* Icons*/}
                      <div className="icon-container">
                          <p>HTML</p>
                          <img src="./images/icons/html.png" alt="HTML" />
                      </div>
                      <div className="icon-container">
                          <p>CSS</p>
                          <img src="./images/icons/css.png" alt="CSS" />
                      </div>
                      <div className="icon-container">
                          <p>JavaScript</p>
                          <img src="./images/icons/js.png" alt="JavaScript" />
                      </div>
                      <div className="icon-container">
                          <p>TypeScript</p>
                          <img src="./images/icons/typescript.png" alt="TypeScript" />
                      </div>
                      <div className="icon-container">
                          <p>Bootstrap</p>
                          <img src="./images/icons/bootstrap.png" alt="Bootstrap" />
                      </div>
                      <div className="icon-container">
                          <p>Sass</p>
                          <img src="./images/icons/sass.png" alt="SASS" />
                      </div>
                      <div className="icon-container">
                          <p>Materialise</p>
                          <img src="./images/icons/materialize.png" alt="Materialise" />
                      </div>
                      <div className="icon-container">
                          <p>JQuery</p>
                          <img src="./images/icons/jquery.png" alt="JQuery" />
                      </div>
                      <div className="icon-container">
                          <p>React</p>
                          <img src="./images/icons/react.png" alt="React" />
                      </div>
                      <div className="icon-container">
                          <p>Redux</p>
                          <img src="./images/icons/redux.png" alt="Redux" />
                      </div>
                      <div className="icon-container">
                          <p>GraphQL</p>
                          <img src="./images/icons/graphql.png" alt="GraphQL" />
                      </div>
                      <div className="icon-container">
                          <p>AngularJS</p>
                          <img src="./images/icons/angularjs.png" alt="AngularJS" />
                      </div>
                      
                        
                    </div>
                </div>
                {/* back end icon container */}
                <div className="icon-category front-end">
                    <h4 className="category-title">FRONT-END</h4>
                    <div className="skills-section-icons">
                        {/* Icons*/}
                      <div className="icon-container">
                          <p>NodeJS</p>
                          <img src="./images/icons/nodejs.png" alt="NodeJS" />
                      </div>
                      <div className="icon-container">
                          <p>Python</p>
                          <img src="./images/icons/python.png" alt="Python" />
                      </div>
                      <div className="icon-container">
                          <p>Django</p>
                          <img src="./images/icons/django.png" alt="Django" />
                      </div>
                      <div className="icon-container">
                          <p>PHP</p>
                          <img src="./images/icons/php.png" alt="PHP" />
                      </div>
                      <div className="icon-container">
                          <p>Laravel</p>
                          <img src="./images/icons/laravel.png" alt="Laravel" />
                      </div>
                      <div className="icon-container">
                          <p>MongoDB</p>
                          <img src="./images/icons/mongodb.png" alt="MongoDB" />
                      </div>
                      <div className="icon-container">
                          <p>MySQL</p>
                          <img src="./images/icons/mysql.png" alt="MySQL" />
                      </div>
                      <div className="icon-container">
                          <p>Postgres</p>
                          <img src="./images/icons/postgres.png" alt="Postgres" />
                      </div>
                      <div className="icon-container">
                          <p>Stripe</p>
                          <img src="./images/icons/stripe.png" alt="Stripe" />
                      </div>
                      <div className="icon-container">
                          <p>Firebase</p>
                          <img src="./images/icons/firebase.png" alt="Firebase" />
                      </div>
                      <div className="icon-container">
                          <p>Heroku</p>
                          <img src="./images/icons/heroku.png" alt="Heroku" />
                      </div>
                      <div className="icon-container">
                          <p>AWS</p>
                          <img src="./images/icons/aws.png" alt="AWS" />
                      </div>
                      
                    </div>
                </div>
           </div>

        </div>
    )
}

export default SkillsSection;