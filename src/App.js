import './App.css';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import WorkPage from './pages/work-page';

function App() {
  return (
    <div className="App">
      <Header />
      <WorkPage/>
      <Footer />     
    </div>
  );
}

export default App;
