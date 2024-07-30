import './App.css';
import NavbarWeb from './components/NavbarWeb';
import ProgressBar from "./components/ProgressBar"
import Home from './components/Home';
import About from './components/About';
import More from './components/More';
import Services from './components/Services';
import Catalog from './components/Catalog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavbarWeb />
      <ProgressBar />
      <Home />
      <More />
      <About />
      <Services />
      <Catalog />

      <Footer />
    </div>
  );
}

export default App;
