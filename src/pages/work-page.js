
import React, { useLayoutEffect } from 'react';
import Projects from '../components/projects/projects.component';

const Work = () => {
    
    useLayoutEffect(() => {
        // Start the page from the top on navigation
        window.scrollTo(0, 0)
      });

    return (
        <Projects />
    )
}

export default Work;