import React from 'react';

import ContactFrom from '../../subcomponents/contact-form/contact-form.component';

import './contact-section.styles.css';



const ContactSection =() => {
    return (
        <div className="contact-section"> 
            <div className="contact-container">
                <h3>CONTACT</h3>
                <ContactFrom />
            </div>
        </div>
    )
}

export default ContactSection;