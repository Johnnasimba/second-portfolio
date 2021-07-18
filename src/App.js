import './App.css';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import AboutPage from './pages/about-page';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutPage />
      <Footer />     
    </div>
  );
}

export default App;
