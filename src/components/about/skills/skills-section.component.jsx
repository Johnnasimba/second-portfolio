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
                        
                    </div>
                </div>
           </div>

        </div>
    )
}

export default SkillsSection;