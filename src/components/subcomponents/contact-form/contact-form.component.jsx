import React from 'react';

import './contact-form.styles.css';

const ContactForm = () => {
    return (
        <div className="contact-form-container">
            <div className="contact-cards">
                  {/* linked in card */}
                   <div className="contact-card">                 
                        <i class="fab fa-linkedin fa-lg"></i>
                       <div className="contact-title-and-link">
                           <h6>LinkedIn</h6>
                           <a href="http://https://www.linkedin.com/in/john-nasimba/" target="_blank" rel="noopener noreferrer">
                               John Nasimba
                           </a>
                       </div>
                    </div>
                    {/* tell phone number card */}
                    <div className="contact-card">  
                        <i className="fa fa-linkedin"></i>
                       <div className="contact-title-and-link">
                           <h6>Mobile Phone</h6>
                           <a href="https://www.linkedin.com/in/john-nasimba/" target="_blank" rel="noopener noreferrer">
                                +27-78-038-7591
                           </a>
                       </div>
                    </div>
                     {/* Email card */}
                    <div className="contact-card">
                       <i className="fa fa-linkedin"></i>  
                       <div className="contact-title-and-link">
                           <h6>Email</h6>
                           <a href="https://www.linkedin.com/in/john-nasimba/" target="_blank" rel="noopener noreferrer">
                               nasimba4john@gmail.com
                           </a>
                       </div>
                   </div>
            </div>
            {/* contact form */}
            <form className="contact-form">
                contact form
            </form>

        </div>
    )
}

export default ContactForm;