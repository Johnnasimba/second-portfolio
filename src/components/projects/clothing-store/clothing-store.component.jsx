
import React from 'react';

import './clothing-store.styles.css';


const ClothingStore = () => {
    return (
        <div className="project clothing-store">
            <div className="project-image">
                <img src="./images/projects-illustrations/clothing-store.png" alt="clothing store" />

            </div>
            <div className="project-details">
                <h4 className="project-title">
                   CLOTHING STORE
                </h4>
                <p className="project-description">
                An online shopping website for a clothing store where the store can post different categories of their clothes and users can buy using credit cards.
                </p>
                <div className="project-languages">
                    <img src="./images/icons/react.png" alt="React"  />
                    <img src="./images/icons/redux.png" alt="Redux"  />
                    <img src="./images/icons/js.png" alt="JavaScript"  />
                    <img src="./images/icons/node.png" alt="NodeJS"  />
                    <img src="./images/icons/stripe.png" alt="Stripe"  />
                </div>
                <div className="project-links">
                    <a href="https://crothing-store.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="primary-button">
                       <span>View The Site</span>  
                    </a>
                    <a href="https://github.com/Johnnasimba/E-commerce-site----React" target="_blank" rel="noopener noreferrer" className="secondary-button">
                        <span>Source Code</span> 
                    </a>
                </div>
            </div>
        </div>
    )
}


export default ClothingStore;



