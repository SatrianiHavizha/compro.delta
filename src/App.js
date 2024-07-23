import './App.css';
import NavbarWeb from './components/NavbarWeb';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavbarWeb />
      <Home />
      <About />
      <Services />

      <Footer />
    </div>
  );
}

export default App;
