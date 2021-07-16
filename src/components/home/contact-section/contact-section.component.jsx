import React from 'react';

import ContactCard from '../../sub-components/contact-card/contact-card.component';
import ContactFrom from '../../sub-components/contact-form/contact-form.component';


import './contact-section.styles.css';



const ContactSection =() => {
    return (
        <div className="contact-section"> 
            <div className="contact-container">
                <h3>CONTACT</h3>
                <div className="contact-form-container">
                    <ContactCard />
                    <ContactFrom />
                </div>
            </div>
        </div>
    )
}

export default ContactSection;