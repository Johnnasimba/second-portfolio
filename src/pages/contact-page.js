import React, { useLayoutEffect } from 'react';

const Contact = () =>{
    useLayoutEffect(() => {
        // Start the page from the top on navigation
        window.scrollTo(0, 0)
      });

    return (
        <div>Contact page</div>
    )
}

export default Contact;