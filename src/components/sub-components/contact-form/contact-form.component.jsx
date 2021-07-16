import React from 'react';

import './contact-form.styles.css';

const ContactForm = () => {
    return (
        <form className="contact-form">
           <div className="name-and-email">
               <input type="text" name="name" placeholder="Name"/>
               <input type="text" name="email" placeholder="Email" />
           </div>
           <input type="text" name="subject" className="subject" placeholder="Subject" />
           <textarea name="message" id="message" className="message" cols="30" rows="10" placeholder="Message">

           </textarea>
           <button type="submit">SEND MESSAGE</button>
        </form>

    )
}

export default ContactForm;