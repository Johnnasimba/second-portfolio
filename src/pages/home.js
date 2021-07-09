import React from 'react';

import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const Home = () => {
    return (
        <div>
            <Header />
            <div className="home-container">
                All home page  content will be displayed here
            </div>
            <Footer />
        </div>
    )
}

export default Home;