import React, { useLayoutEffect } from 'react';


import Header from '../components/header/header.component';
import Footer from '../components/footer/footer.component';
import HomePage from '../pages/home-page'
import AboutPage from '../pages/about-page';
import WorkPage from '../pages/work-page';
import ContactPage from '../pages/contact-page';
import styled from 'styled-components';



import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const Wrapper = styled.div`
  width: 100vw;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function App() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <Wrapper>
        <Router>
          <Header />
          <Switch>          
            <Route path="/about" >
              <AboutPage />
            </Route>
            <Route path="/projects" >
              <WorkPage />
            </Route>
            <Route path="/contact" >
              <ContactPage />
            </Route>
              <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        <Footer />     
      </Router>
    </Wrapper>
  );
}

export default App;
