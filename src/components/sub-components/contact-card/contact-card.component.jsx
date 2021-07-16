import React from 'react'

import './contact-card.styles.css';

const ContactCard = () => {
    return (
        <div className="contact-cards">
                  {/* linked in card */}
                   <div className="contact-card">                 
                        <i className="fab fa-linkedin fa-2x"></i>
                       <div className="contact-title-and-link">
                           <h6>LinkedIn</h6>
                           <a href="http://https://www.linkedin.com/in/john-nasimba/" target="_blank" rel="noopener noreferrer">
                               John Nasimba
                           </a>
                       </div>
                    </div>
                    {/* tell phone number card */}
                    <div className="contact-card">  
                    <i className="fas fa-phone-square-alt  fa-2x"></i>
                       <div className="contact-title-and-link">
                           <h6>Mobile Phone</h6>
                           <a href="https://www.linkedin.com/in/john-nasimba/" target="_blank" rel="noopener noreferrer">
                                +27-78-038-7591
                           </a>
                       </div>
                    </div>
                     {/* Email card */}
                    <div className="contact-card">
                       <i className="far fa-envelope  fa-2x"></i>
                       <div className="contact-title-and-link">
                           <h6>Email</h6>
                           <a href="https://www.linkedin.com/in/john-nasimba/" target="_blank" rel="noopener noreferrer">
                               nasimba4john@gmail.com
                           </a>
                       </div>
                   </div>
            </div>
    )
}

export default ContactCard;