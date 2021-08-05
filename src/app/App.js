import './App.css';
import Header from '../components/header/header.component';
import Footer from '../components/footer/footer.component';
import HomePage from '../pages/home-page'
import AboutPage from '../pages/about-page';
import WorkPage from '../pages/work-page';
import ContactPage from '../pages/contact-page';


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about" >
              <AboutPage />
            </Route>
            <Route path="/projects" >
              <WorkPage />
            </Route>
            <Route path="/contact" >
              <ContactPage />
            </Route>
          </Switch>
        <Footer />     
      </Router>
    </div>
  );
}

export default App;
