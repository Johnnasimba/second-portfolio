import React, { useLayoutEffect } from 'react';
import Home  from '../components/home/home.component';

const HomePage = () => {
    useLayoutEffect(() => {
        // Start the page from the top on navigation
        window.scrollTo(0, 0)
      });

    return (               
        <Home />
    )
}

export default HomePage;