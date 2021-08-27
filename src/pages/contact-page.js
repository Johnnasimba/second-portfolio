import React, { useLayoutEffect } from 'react';
import  Contact from '../components/contact/contact.component';

const ContactPage = () =>{
    useLayoutEffect(() => {
        // Start the page from the top on navigation
        window.scrollTo(0, 0)
      });

    return (
        <Contact></Contact>
    )
}

export default ContactPage;