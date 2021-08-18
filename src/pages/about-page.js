import React, { useLayoutEffect } from 'react';


import About from '../components/about/about.component'

const AboutPage = () => {
    useLayoutEffect(() => {
        // Start the page from the top on navigation
        window.scrollTo(0, 0)
      });

    return(
        <About />
    )
}

export default AboutPage;
